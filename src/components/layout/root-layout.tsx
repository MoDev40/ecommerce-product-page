import { Outlet } from "react-router-dom";
import Desktop from "../desktop-navbar";

const RootLayout = () => {
  return (
    <div className="container flex flex-col min-h-screen mx-auto">
      <Desktop />
      <div className="flex flex-col sm:gap-4 sm:py-2">
        <header className="sticky top-0 z-30 flex items-center gap-4 px-4 border-b h-14 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          {/* <Mobile /> */}
        </header>
        <main className="flex flex-col items-start flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
