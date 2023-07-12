import { useEffect, useState } from "react";
import { getAllMaintances } from "../API";

function useGetAllMaintances(offset, limit) {
  const [pageMaintances, setPageMaintances] = useState([]);
  const [loadingMaintances, setLoading] = useState(true);
  const [errorMaintances, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const maintances = await getAllMaintances(offset, limit);
        setPageMaintances(maintances);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetch();
  }, [offset, limit]);

  return { pageMaintances, loadingMaintances, errorMaintances };
}

export { useGetAllMaintances };
