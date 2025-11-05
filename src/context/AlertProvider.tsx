/* eslint-disable react/react-in-jsx-scope */
import { Alert, CloseButton } from "@chakra-ui/react";
import { createContext, useCallback, useState, type PropsWithChildren } from "react";

export enum AlertStatus {
  WARNING = 'warning',
  INFO = 'info',
  ERROR = 'error',
  SUCCESS = 'success',
  NEUTRAL = 'neutral'
}

type AlertProviderProps = {
  dispatchAlert: (status: AlertStatus, message: string) => void;
}

export const AlertContext = createContext<AlertProviderProps>({ dispatchAlert: () => null })

export default function AlertProvider({ children }: PropsWithChildren) {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<AlertStatus | undefined>()

  const dispatchAlert = useCallback((alertStatus: AlertStatus | undefined, alertMessage: string) => {
    setMessage(alertMessage);
    setStatus(alertStatus);
  }, []);

  return (
    <AlertContext.Provider value={{ dispatchAlert }}>
      {message && status && (
        <Alert.Root status={status} style={{ position: 'absolute', zIndex: 10, right: 10, bottom: 10, width: 'fit-content' }}>
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Description>
              {message}
            </Alert.Description>
          </Alert.Content>
          <CloseButton pos="relative" top="-2" insetEnd="-2"
            onClick={() => dispatchAlert(undefined, "")} />
        </Alert.Root>
      )}
      {children}
    </AlertContext.Provider>
  )
}