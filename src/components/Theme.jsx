import { useTheme } from "../context/ThemeContext";

const Theme = () => {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <div
      className={`h-screen ${
        currentTheme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="flex justify-center items-center">
        <button
          onClick={toggleTheme}
          className={`${
            currentTheme === "light"
              ? "text-black"
              : "text-white"
          }`}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Theme;
