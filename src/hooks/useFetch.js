import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {

  const [isloading, setIsLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);


  const doFetch = useCallback(async () => {

    if(url !== null) {
      axios.get(url).then((response) => {
        console.log(response);
  
        if(response.data?.cod === "404") {
          setError("Ciudad no encontrada");
        } else {
          setResult({ data: response.data });
        }
        setIsLoading(false);
      })
    }
  }, [url]);

  useEffect(() => {
    doFetch();
  }, [doFetch, url]);
  
  return { isloading, result, error, doFetch };

}

export default useFetch;
