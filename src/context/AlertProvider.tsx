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
const SECONDS_TO_VANISH = 2000;

export default function AlertProvider({ children }: PropsWithChildren) {
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<AlertStatus | undefined>()

  const clearAlert = useCallback(() => setOpen(false), []);

  const dispatchAlert = useCallback((alertStatus: AlertStatus | undefined, alertMessage: string) => {
    setMessage(alertMessage);
    setStatus(alertStatus);
    setOpen(true);
    setTimeout(clearAlert, SECONDS_TO_VANISH);
  }, [clearAlert]);

  return (
    <AlertContext.Provider value={{ dispatchAlert }}>
      <Alert.Root status={status} style={{
        opacity: 0,
        position: 'absolute',
        zIndex: 10,
        right: 10,
        bottom: 10,
        width: 'fit-content',
        transition: 'all 0.3s linear',
        ...(open && {
          opacity: 1
        })
      }}>
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Description>
            {message}
          </Alert.Description>
        </Alert.Content>
        <CloseButton pos="relative" top="-2" insetEnd="-2"
          onClick={clearAlert} />
      </Alert.Root>
      {children}
    </AlertContext.Provider>
  )
}