import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

//   const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true);
  

      try {
        const response = await fetch(url, {
          method,
          body,
          headers
    
        });

        const responseData = await response.json();
        console.log(responseData);

        if (!response.ok) {
          console.log("arun");
          // return responseData;
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };



  return { isLoading, error, sendRequest, clearError };
};