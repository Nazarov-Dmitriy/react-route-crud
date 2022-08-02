import {
  useState,
  useEffect
} from "react";

export default function useFetch(url, method) {
  const [posts, setPost] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchReqFlag, setFetchReqFlag] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(url, {
        method
      });
      const data = await response.json();
      try {
        if (!response.ok) {
          throw new Error("Error");

        }
        setPost((prev) => [...data]);
      } catch (e) {
        setError(e.message);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };

    fetchData();
  }, [fetchReqFlag]);

  return [posts, setPost, loading, error, fetchReqFlag, setFetchReqFlag];
}