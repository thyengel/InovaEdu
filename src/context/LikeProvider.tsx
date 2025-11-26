import { createContext, useCallback, useMemo, useState, type PropsWithChildren } from "react";

type LikeProviderType = {
  likedList: string[];
  add: (title: string) => void;
  remove: (title: string) => void;
}

export const LikeContext = createContext<LikeProviderType>({
  likedList: [],
  add: () => null,
  remove: () => null
});

export default function LikeProvider({ children }: PropsWithChildren) {
  const [likedList, setLikedList] = useState<string[]>([]);

  const add = useCallback((title: string) => {
    setLikedList((prevState) => [...prevState, title])
  }, []);

  const remove = useCallback((title: string) => {
    setLikedList((prevState) => prevState.filter((liked) => liked !== title))
  }, []);
  const memo = useMemo(() => ({ likedList, add, remove }), [likedList, add, remove])
  return (
    <LikeContext.Provider value={memo}>
      {children}
    </LikeContext.Provider>
  )
}