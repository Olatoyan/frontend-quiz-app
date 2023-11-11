import { useDispatch, useSelector } from "react-redux";
import { selectIcon, selectQuiz } from "./homeSlice";
import { useNavigate } from "react-router-dom";

function HomeItem({ img, text }) {
  const { darkMode } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function setQuiz() {
    dispatch(selectQuiz(text));
    dispatch(selectIcon(img));
    navigate(`/${text}`);
  }

  const bgColors = {
    HTML: "#FFF1E9",
    CSS: "#E0FDEF",
    JavaScript: "#EBF0FF",
    Accessibility: "#F6E7FF",
  };

  const bgStyle = {
    backgroundColor: bgColors[text],
    borderRadius: "0.4rem",
  };

  return (
    <li
      className={`mobile:gap-6 mobile:rounded-[1.2rem] flex cursor-pointer items-center gap-12 rounded-[2.4rem] p-8 shadow-sm transition-all duration-300 ${
        darkMode ? "bg-navy" : "bg-white"
      }`}
      onClick={setQuiz}
    >
      <img
        src={img}
        alt={text}
        className="h-[4rem] w-[4rem] p-2"
        style={bgStyle}
      />
      <p
        className={`mobile:text-[1.8rem] text-[2.8rem] font-medium leading-[100%] transition-all duration-300 ${
          darkMode ? "text-white" : "text-dark-navy"
        }`}
      >
        {text}
      </p>
    </li>
  );
}

export default HomeItem;
