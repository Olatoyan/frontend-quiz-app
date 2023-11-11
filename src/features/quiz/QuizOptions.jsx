import { useDispatch, useSelector } from "react-redux";
import { setChosenAnswer } from "./quizSlice";

function QuizOptions({ option, optionIndex, userAnswer, setIsAnswered }) {
  const { chosenAnswer, correctAnswer } = useSelector((state) => state.quiz);
  const { darkMode } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const optionLetter = String.fromCharCode(65 + optionIndex);
  function chooseAnswer() {
    if (userAnswer !== "") return;
    dispatch(setChosenAnswer(option));
    setIsAnswered(false);
  }

  const isAnswerCorrect = userAnswer === option && userAnswer === correctAnswer;
  const isAnswerWrong = userAnswer === option && userAnswer !== correctAnswer;
  const isOptionChosen = chosenAnswer === option;
  return (
    <button
      className={`tablet:gap-8 mobile:rounded-[1.2rem] mobile:text-[1.8rem] mobile:px-5 mobile:py-4 group flex w-full items-center gap-12 rounded-[2.4rem] border-[3px] px-8 py-7 text-[2.8rem] font-medium leading-[100%] text-grey-navy shadow-sm transition-all duration-300 ${
        isAnswerCorrect
          ? "cursor-not-allowed border-green"
          : isAnswerWrong
          ? "cursor-not-allowed border-red"
          : isOptionChosen
          ? "border-purple"
          : (userAnswer !== "" && option === correctAnswer) ||
            (userAnswer !== "" && option !== correctAnswer)
          ? "cursor-not-allowed border-transparent"
          : "border-transparent hover:border-purple"
      }
      ${darkMode ? "bg-navy" : "bg-white"}
      `}
      onClick={() => chooseAnswer(option)}
    >
      <span
        className={`inline-block rounded-xl p-6 transition-all duration-300  ${
          isAnswerCorrect
            ? "bg-green text-white"
            : isAnswerWrong
            ? "bg-red text-white"
            : isOptionChosen
            ? "bg-purple text-white"
            : (userAnswer !== "" && option === correctAnswer) ||
              (userAnswer !== "" && option !== correctAnswer)
            ? "bg-light-grey"
            : "bg-light-grey group-hover:bg-[#f6e7ff] group-hover:text-[#a729f5]"
        }
        
        
       `}
      >
        {optionLetter}
      </span>
      <span
        className={` ${
          darkMode ? "text-white" : "text-dark-navy"
        } transition-all duration-300`}
      >
        {option}
      </span>
      {userAnswer !== "" &&
        (option === correctAnswer ? (
          <img src="/icon-correct.svg" alt="correct icon" className="ml-auto" />
        ) : (
          isAnswerWrong && (
            <img
              src="/icon-incorrect.svg"
              alt="incorrect icon"
              className="ml-auto"
            />
          )
        ))}
    </button>
  );
}

export default QuizOptions;
