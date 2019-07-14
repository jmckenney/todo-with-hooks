import { useState, useEffect, useContext } from "react";
import { LoadingContext } from "../LoadingContext/LoadingContext";

export const useFetch = (url, defaultData) => {
  const [data, updateData] = useState(defaultData);
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      if (!url) {
        updateData(defaultData);
        return;
      }
      const resp = await fetch(url);
      const json = await resp.json();
      updateData(json);
      setLoading(false);
    }
    fetchData();
  });

  return data;
};

export const useFetchMovies = (search, apikey) => {
  const query = `http://www.omdbapi.com/?s=${search}&apikey=${apikey}`;
  return useFetch(search ? query : null, { Search: [] });
};
