import { useState } from "react";

async function sendHttpRequest(url, config) {
  const response = fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to sent request."
    );
  }

  return resData;
}

export default function useHttp() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

  async function sendRequest() {
    setIsLoading(true);
    try {
      const resData = sendHttpRequest();
      setData(resData);g
    } catch (error) {
        setError(error.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }
}
