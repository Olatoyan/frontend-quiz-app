import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/home/homeSlice";
import quizReducer from "./features/quiz/quizSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    quiz: quizReducer,
  },
});

export default store;
