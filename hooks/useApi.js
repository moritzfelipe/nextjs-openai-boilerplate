// file: /hooks/useApi.js
import { useState, useEffect } from "react";

const useApi = (url, method, payload) => {
  // Define the state variables for data, error, and loading
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  // Use useEffect to make the API call when the payload changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before making the API call
      try {
        // Make the API call using the provided url, method, and payload
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ payload }),
        });

        const result = await response.json();
        if (response.status !== 200) {
          // If the response status is not 200, throw an error
          throw (
            result.error ||
            new Error(`Request failed with status ${response.status}`)
          );
        }

        setData(result); // Set the data state with the API response
        setError(null); // Reset the error state to null
      } catch (error) {
        setError(error); // Set the error state with the caught error
      } finally {
        setLoading(false); // Set loading to false after the API call
      }
    };
    if (payload) {
      fetchData(); // Call fetchData only if payload is provided
    }
  }, [url, method, payload]);

  // Return the data, error, and loading states from the hook
  return { data, error, loading };
};

export default useApi;
