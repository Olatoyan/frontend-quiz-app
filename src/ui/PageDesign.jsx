import { useSelector } from "react-redux";

function PageDesign() {
  const { darkMode } = useSelector((state) => state.home);
  return (
    <div>
      <img
        src="/pattern-background-desktop-dark.svg"
        alt="pattern img"
        className={`desktop:hidden absolute  inset-0 transition-all duration-300 ${
          darkMode ? "opacity-100" : "opacity-0"
        }`}
      />

      <img
        src="/pattern-background-desktop-light.svg"
        alt="pattern img"
        className={`desktop:hidden absolute  inset-0 transition-all duration-300 ${
          darkMode ? "opacity-0" : "opacity-100"
        }`}
      />

      <img
        src="/pattern-background-tablet-light.svg"
        alt="pattern img"
        className={`desktop:block absolute  inset-0 hidden transition-all duration-300 ${
          darkMode ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src="/pattern-background-tablet-dark.svg"
        alt="pattern img"
        className={`desktop:block absolute  inset-0 hidden transition-all duration-300 ${
          darkMode ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default PageDesign;
