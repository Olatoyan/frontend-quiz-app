import { Outlet } from "react-router-dom";
import Header from "./Header";
import PageDesign from "./PageDesign";
import { useSelector } from "react-redux";

function AppLayout() {
  const { darkMode } = useSelector((state) => state.home);

  return (
    <div
      className={`laptop:px-24 desktop:py-16 mobile:py-8 mobile:px-8 relative grid min-h-screen grid-rows-[auto_1fr] overflow-hidden px-56 py-32 font-rubik transition-all duration-300 ${
        darkMode ? "bg-dark-navy" : "bg-light-grey"
      }`}
    >
      <Header />
      <main className="z-[2]">
        <Outlet />
      </main>
      <PageDesign />
    </div>
  );
}

export default AppLayout;
