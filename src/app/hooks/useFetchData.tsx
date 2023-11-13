import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchData(endpoint: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8080${endpoint}`);
        setData(res.data);
      } catch (error: any) {
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return [data, loading, error];
}
