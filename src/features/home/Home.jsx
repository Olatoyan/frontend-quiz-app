import { useLoaderData } from "react-router-dom";
import { getQuiz } from "../../services/questions";
import HomeItem from "./HomeItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuizzes } from "./homeSlice";

function Home() {
  const { darkMode } = useSelector((state) => state.home);
  const data = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuizzes(data));
  }, [dispatch, data]);

  return (
    <div className="desktop:grid-cols-1 desktop:gap-24 mobile:gap-16 grid grid-cols-2">
      <div>
        <h1
          className={`mobile:text-[4rem] mobile:pb-8 pb-20 text-[6.4rem] font-light leading-[100%] transition-all duration-300 ${
            darkMode ? "text-white" : "text-dark-navy"
          }`}
        >
          Welcome to the <br />
          <span className="font-medium">Frontend Quiz!</span>
        </h1>
        <p
          className={`mobile:text-[1.8rem] text-[2rem] italic leading-[150%] transition-all duration-300 ${
            darkMode ? "text-light-bluish" : "text-grey-navy"
          }`}
        >
          Pick a subject to get started.
        </p>
      </div>
      <div>
        <ul className="mobile:space-y-5 space-y-8">
          {data &&
            data.map((item) => (
              <HomeItem key={item.title} img={item.icon} text={item.title} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;

export async function loader() {
  const data = await getQuiz();

  return data;
}
