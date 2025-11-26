import { LikeContext } from "@/context/LikeProvider";
import { useContext } from "react";

export default function useLikedList() {
  const context = useContext(LikeContext);
  return context;
}