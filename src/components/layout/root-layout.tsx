import { Outlet } from "react-router-dom";
import Desktop from "../desktop-navbar";
import Mobile from "../mobile-navbar";

const RootLayout = () => {
  return (
    <div className="container flex flex-col min-h-screen mx-auto">
      <Desktop />
      <div className="flex flex-col sm:gap-4 sm:py-2">
        <Mobile />
        <main className="flex flex-col items-start flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
