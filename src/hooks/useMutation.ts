import { useCallback, useState } from "react";
import { getDelay } from "./useQuery";

export default function useMutation<T>({ mutationFn }: { mutationFn: (data?: T) => void }) {
  const [isLoading, setIsLoading] = useState(false);

  const mutate = useCallback(async (
    body: { data: T } | undefined,
    { onSuccess, onError }: {
      onSuccess?: () => void,
      onError?: (e: unknown) => void
    }) => {
    const delay = getDelay();
    await new Promise<void>((resolve) => {
      setIsLoading(true);
      setTimeout(() => {
        try {
          mutationFn(body?.data);
          onSuccess?.();
        } catch (e) {
          onError?.(e);
        } finally {
          setIsLoading(false);
          resolve();
        }
      }, delay);
    });
  }, [mutationFn]);

  return {
    isLoading,
    mutate
  }
}