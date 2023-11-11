import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetQuiz } from "../features/quiz/quizSlice";
import { resetMode } from "../features/home/homeSlice";
import { useEffect } from "react";

function FinishedScreen() {
  const { name, icon } = useSelector((state) => state.home);
  const { score, questions } = useSelector((state) => state.quiz);
  const { darkMode } = useSelector((state) => state.home);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bgColors = {
    HTML: "#FFF1E9",
    CSS: "#E0FDEF",
    JavaScript: "#EBF0FF",
    Accessibility: "#F6E7FF",
  };

  const bgStyle = {
    backgroundColor: bgColors[name],
  };

  function playAgain() {
    dispatch(resetQuiz());
    dispatch(resetMode());
    navigate("/");
  }

  useEffect(() => {
    if (!name || !icon) {
      dispatch(resetQuiz());
      dispatch(resetMode());
      navigate("/");
    }
  }, [icon, name, dispatch, navigate]);

  return (
    <div className="desktop:grid-cols-1 desktop:gap-24 mobile:gap-16 grid grid-cols-2">
      <div>
        <h2
          className={`mobile:text-[4rem] text-[6.4rem] font-light leading-[100%] transition-all duration-300 ${
            darkMode ? "text-white" : "text-dark-navy"
          }`}
        >
          Quiz completed <br />
          <span className="font-medium">You scored...</span>
        </h2>
      </div>
      <div>
        <div
          className={`mobile:rounded-[1.2rem] flex flex-col items-center gap-16 rounded-[2.4rem] p-20 transition-all duration-300 ${
            darkMode ? "bg-navy" : "bg-white"
          }`}
        >
          <div className="mobile:gap-8 flex items-center gap-12">
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
          <div className="flex flex-col items-center gap-6">
            <p
              className={`mobile:text-[8.8rem] text-[14.4rem] font-medium leading-[100%] transition-all duration-300 ${
                darkMode ? "text-white" : "text-dark-navy"
              }`}
            >
              {score}
            </p>
            <p
              className={`mobile:text-[1.8rem] text-[2.4rem] leading-[150%] transition-all duration-300 ${
                darkMode ? "text-light-bluish" : "text-dark-navy"
              }`}
            >
              out of {questions.length}
            </p>
          </div>
        </div>
        <button
          className=" mobile:text-[1.8rem] mobile:p-7 mobile:rounded-[1.2rem] col-start-2 mt-12 w-full rounded-[2.4rem] bg-purple p-[3.2rem] text-[2.8rem] font-medium leading-[100%] text-white transition-all duration-300"
          onClick={playAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default FinishedScreen;
