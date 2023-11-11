import { useDispatch, useSelector } from "react-redux";
import { setAnswer, setChosenAnswer, setIndex, setScore } from "./quizSlice";
import { useEffect, useState } from "react";
import QuizOptions from "./QuizOptions";
import { useNavigate } from "react-router-dom";

function QuizPage({ question }) {
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  const { index, questions, chosenAnswer, correctAnswer, score } = useSelector(
    (state) => state.quiz,
  );
  const { darkMode } = useSelector((state) => state.home);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitAnswer() {
    if (chosenAnswer === "") setIsAnswered(true);

    setUserAnswer(chosenAnswer);
  }

  function nextQuestion() {
    if (userAnswer === correctAnswer) dispatch(setScore());

    dispatch(setIndex(index));
    dispatch(setChosenAnswer(""));
    setIsAnswered(false);
  }

  function finishQuiz() {
    if (userAnswer === correctAnswer) dispatch(setScore());

    navigate("/finished");
  }

  const btnClass =
    "w-full rounded-[2.4rem] bg-purple p-[3.2rem] text-[2.8rem] font-medium leading-[100%] text-white transition-all duration-300 hover:bg-[#a729f571] mobile:text-[1.8rem] mobile:p-7 mobile:rounded-[1.2rem]";

  useEffect(() => {
    dispatch(setAnswer(question.answer));
  }, [question.answer, dispatch]);

  return (
    <div className="grid grid-cols-2 gap-x-24 gap-y-12 desktop:grid-cols-1 desktop:gap-x-0">
      <div className="flex flex-col gap-11 desktop:pb-12 mobile:gap-5 mobile:pb-4">
        <p
          className={`text-[2rem] italic leading-[150%] transition-all duration-300 mobile:text-[1.4rem] ${
            darkMode ? "text-light-bluish" : "text-dark-navy"
          }`}
        >
          Question {index + 1} of {questions.length}
        </p>
        <h2
          className={`text-[3.6rem] font-medium leading-[120%] transition-all duration-300 mobile:text-[2rem] ${
            darkMode ? "text-white" : "text-dark-navy"
          }`}
        >
          {question.question}
        </h2>
        <div className="mt-auto">
          <progress
            max={questions.length}
            className={`w-full ${
              darkMode
                ? "[&::-moz-progress-bar]:bg-navy [&::-webkit-progress-bar]:bg-navy"
                : "[&::-moz-progress-bar]:bg-white [&::-webkit-progress-bar]:bg-white"
            }  [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:p-[1.5px] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-purple`}
            value={score}
          />
        </div>
        {/* <div
          className={`relative mt-auto h-6 w-full rounded-full p-2 transition-all duration-300 before:absolute before:top-1/4 before:h-3 before:w-3/4 before:rounded-full before:bg-purple desktop:before:w-1/2 mobile:before:w-1/4 ${
            darkMode ? "bg-navy" : "bg-white"
          }`}
        ></div> */}
      </div>
      <div className="space-y-10 mobile:space-y-5">
        {question.options.map((item, index) => (
          <QuizOptions
            key={item}
            option={item}
            optionIndex={index}
            userAnswer={userAnswer}
            setIsAnswered={setIsAnswered}
          />
        ))}
      </div>
      <div className="col-start-2 desktop:col-start-1">
        {userAnswer === "" && (
          <button className={btnClass} onClick={submitAnswer}>
            Submit Answer
          </button>
        )}

        {userAnswer !== "" && index < questions.length - 1 ? (
          <button className={btnClass} onClick={nextQuestion}>
            Next Question
          </button>
        ) : (
          userAnswer !== "" &&
          index === questions.length - 1 && (
            <button className={btnClass} onClick={finishQuiz}>
              Submit Quiz
            </button>
          )
        )}

        <div
          className={`mt-12 flex items-center justify-center gap-8 ${
            isAnswered ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src="/icon-incorrect.svg" alt="incorrect icon" />
          <p className="text-[2.4rem] leading-[150%] text-red mobile:text-[1.8rem]">
            Please select an answer
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
