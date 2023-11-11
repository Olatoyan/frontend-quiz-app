import { useSelector } from "react-redux";
import { getQuiz } from "../services/questions";
import ToggleMode from "./ToggleMode";

function Header() {
  const { name, icon, darkMode } = useSelector((state) => state.home);

  const bgColors = {
    HTML: "#FFF1E9",
    CSS: "#E0FDEF",
    JavaScript: "#EBF0FF",
    Accessibility: "#F6E7FF",
  };

  const bgStyle = {
    backgroundColor: bgColors[name],
  };

  return (
    <header className="desktop:pb-24 z-[2] flex items-center justify-between pb-40">
      <div
        className={`mobile:gap-8 flex items-center gap-12 ${
          !name ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={icon}
          alt={name}
          className="h-[4rem] w-[4rem] p-2"
          style={bgStyle}
        />
        <p
          className={`mobile:text-[1.8rem] text-[2.8rem] font-medium leading-[100%] transition-all duration-300 ${
            darkMode ? "text-white" : "text-dark-navy"
          }`}
        >
          {name}
        </p>
      </div>
      <ToggleMode />
    </header>
  );
}

export default Header;

export async function loader() {
  const data = await getQuiz();

  return data;
}
