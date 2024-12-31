import React from 'react';
import {useEscapeKeyHandler} from "../../hooks/KeyHandler";

export const ToastProviderContext = React.createContext()

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  useEscapeKeyHandler(() => setToasts([]))

  const removeToast = React.useCallback((id) => {
    setToasts((toasts) => toasts.filter(it => it.id !== id));
  }, [])

  const addToast = (message, variant) => {
    setToasts([...toasts, {id: Math.random(), message, variant}]);
  }

  const value = {toasts, addToast, removeToast};

  return <ToastProviderContext.Provider value={value}>{children}</ToastProviderContext.Provider>
}

export default ToastProvider;
