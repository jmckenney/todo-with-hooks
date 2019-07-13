import { useState, useEffect } from "react";

export const useFetch = (url, defaultData) => {
  const [data, updateData] = useState(defaultData);

  useEffect(() => {
    async function fetchData() {
      if (!url) {
        updateData(defaultData);
        return;
      }
      const resp = await fetch(url);
      const json = await resp.json();
      updateData(json);
    }
    fetchData();
  }, [url]);

  return data;
};

export const useFetchMovies = (search, apikey) => {
  const query = `http://www.omdbapi.com/?s=${search}&apikey=${apikey}`;
  return useFetch(search ? query : null, { Search: [] });
};
