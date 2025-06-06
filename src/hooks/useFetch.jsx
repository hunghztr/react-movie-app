import { useEffect, useState } from "react"

const DEFAULT_HEADERS={
  accept: "application/json",
          Authorization:
            `Bearer ${import.meta.env.VITE_API_TOKEN}`,
}
export default function useFetch({url='',method='GET',headers={}},{enabled} = {enabled:true}){
  const [data,setData] = useState({});
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    if(enabled){
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
      
      .finally(() => {
        setLoading(false);
      });
    }
    
  }, [url,method,JSON.stringify(headers),enabled]);
  return {loading,data}
}