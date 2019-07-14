import { useState, useEffect } from "react";

export const useFetch = (url, defaultData) => {
  const [data, updateData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      if (!url) {
        updateData(defaultData);
        setIsLoading(true);
        return;
      }
      const resp = await fetch(url);
      const json = await resp.json();
      updateData(json);
      setIsLoading(true);
    }
    fetchData();
  });

  return data;
};

export const useFetchMovies = (search, apikey) => {
  const query = `http://www.omdbapi.com/?s=${search}&apikey=${apikey}`;
  return useFetch(search ? query : null, { Search: [] });
};
