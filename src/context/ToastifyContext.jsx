import { createContext, useState } from "react";

export const ToastifyContext = createContext({
  positions: {
    bottomLeft: "bottom-left",
    bottomRight: "bottom-right",
    topLeft: "top-left",
    topRight: "top-right",
  },
  types: {
    success: "success",
    error: "error",
  },
  addToast: ({ text, type, duration, position }) => {},
  removeToast: () => {},
  groupedToasts: {},
});

const ToastifyContextProvider = ({ children }) => {
  const positions = {
    bottomLeft: "bottom-left",
    bottomRight: "bottom-right",
    topLeft: "top-left",
    topRight: "top-right",
  };

  const types = {
    success: "success",
    error: "error",
  };

  const [toasts, setToasts] = useState([]);
  const groupedToasts = toasts.reduce((acc, toast) => {
    acc[toast.position] = acc[toast.position] || [];
    acc[toast.position].push(toast);
    return acc;
  }, {});

  const addToast = ({
    type = "error",
    text,
    position = positions.bottomRight,
    duration = 3000, // Default duration of 3 seconds
  }) => {
    const id = Date.now() + Math.random(); // Unique ID for each toast
    const newToast = {
      id,
      type,
      text,
      position,
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);

    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.filter((toast) => toast.id !== id)
      );
    }, duration);
  };

  const removeToast = (index) => {
    setToasts(toasts.filter((_, i) => i !== index));
  };
  return (
    <ToastifyContext.Provider
      value={{
        groupedToasts,
        positions,
        addToast,
        types,
        removeToast,
      }}
    >
      {children}
    </ToastifyContext.Provider>
  );
};

export default ToastifyContextProvider;
