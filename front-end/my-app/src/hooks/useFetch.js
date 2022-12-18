import { useEffect, useState, useCallback } from "react";



  
  export default function useFetch(query) {
      const URL = 'https://api.websitecarbon.com/site?url=' 
      const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
  
    const executeFetch = useCallback(async () => {
      setIsPending(true)
      setData(null)
      setError(null)
      await fetch(URL + query, {options: { mode: 'no-cors'} })
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) => setError(err))
        .finally(() => setIsPending(false))
    }, [query])
  
    useEffect(() => {
      
    }, [executeFetch])
    return { data, error, isPending, executeFetch }
  }
