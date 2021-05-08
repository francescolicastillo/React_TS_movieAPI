import { useState, useEffect } from "react"



export const useFetch = (apiPath: string) => {
  const URL = `https://api.themoviedb.org/3/${apiPath}`;
  const [data, setData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`
    }
  };

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(URL, options);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [URL])

  return (
    { data }
  )
}
