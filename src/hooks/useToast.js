import { useContext } from "react";
import { ToastifyContext } from "../context/ToastifyContext";

export const useToast = () => {
  const context = useContext(ToastifyContext);
  if (!context) {
    throw new Error(
      "useTheme must be used within a ThemeProvider"
    );
  }
  return context;
};
