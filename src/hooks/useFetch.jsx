import { useEffect, useState } from "react"

const DEFAULT_HEADERS={
  accept: "application/json",
          Authorization:
            `Bearer ${import.meta.env.VITE_API_TOKEN}`,
}
export default function useFetch({url='',method='GET',headers={}}){
  const [data,setData] = useState({});
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    fetch(
      `${import.meta.env.VITE_API_HOST}${url}`,
      {
        method,
        headers:{
          ...DEFAULT_HEADERS,
          ...headers
        }
      }
    )
      .then(async (res) => {
        const data = await res.json();
        setData(data)
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url,method,JSON.stringify(headers)]);
  return {loading,data}
}