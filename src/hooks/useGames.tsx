import   { useEffect, useState } from "react";
import apiClient from "../services/api-client";

type Game = {
  id: number;
  name: string;
};

type FetchedGames = {
  count: number;
  results: Game[];
};

function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchedGames>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
    return () => controller.abort();
  }, []);

  return { games, error };
}

export default useGames;
