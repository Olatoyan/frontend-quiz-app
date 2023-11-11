import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./features/home/Home";
import { loader as homeLoader } from "./ui/Header";
import Quiz from "./features/quiz/Quiz";
import Error from "./ui/Error";
import FinishedScreen from "./ui/FinishedScreen";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,

      children: [
        {
          path: "/",
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: "/:type",
          element: <Quiz />,
          errorElement: <Error />,
        },
        {
          path: "/finished",
          element: <FinishedScreen />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
