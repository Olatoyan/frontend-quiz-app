import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetQuiz } from "../features/quiz/quizSlice";
import { useEffect } from "react";

function Error() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    navigate("/");
    dispatch(resetQuiz());
  }, [navigate, dispatch]);

  return null;
}

export default Error;
