import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();



  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true);

      let responseData;

      try {
        const response = await fetch(url, {
          method,
          body,
          headers
    
        });

        const responseData = await response.json();
        // console.log(responseData);
        // console.log("place delted");

        if (!response.ok) {
          // console.log("arun from ok");
          throw new Error(responseData.message);
        }

        // setIsLoading(false);
        return responseData;
      } catch (err) {
        console.log(err.message);
        setError(err.message);
        return responseData;

      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };



  return { isLoading, error, sendRequest, clearError };
};