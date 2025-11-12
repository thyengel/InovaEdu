import { useCallback, useEffect, useState } from "react";

export function getDelay() {
  return Math.min(2000, Math.random() * 2000)
}

export default function useQuery<T>({ queryFn, onSuccess, onError }: {
  queryFn: () => T,
  onSuccess: (data: T) => void,
  onError: (e: unknown) => void
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const delay = getDelay();
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        try {
          const response = queryFn();
          setData(response);
          onSuccess(response);
        } catch (e) {
          onError(e);
        } finally {
          setIsLoading(false);
          resolve();
        }
      }, delay);
    })
  }, [queryFn])

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    data,
    refetch: fetchData
  }
}