import { AlertContext } from "@/context/AlertProvider";
import { useContext } from "react";

export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) throw new Error('hook should be used within the provider');
  return context;
}