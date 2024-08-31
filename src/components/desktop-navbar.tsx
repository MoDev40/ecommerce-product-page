import { Link, useLocation } from "react-router-dom";
import { routes } from "../utils/utils";
import clsx from "clsx";

const Desktop = () => {
  const { pathname } = useLocation();
  return (
    <header className="flex-row items-center justify-between hidden h-20 hover:border-b sm:flex">
      <nav className="flex flex-row items-center space-x-10">
        <h1 className="text-3xl font-black">Sneakers</h1>
        <ul className="flex flex-row space-x-4 text-grayish-blue">
          {routes.map(({ path, name }) => (
            <ul key={path}>
              <Link
                className={clsx(
                  "transition-all hover:border-b-2 hover:border-b-primary-orange hover:p-1",
                  {
                    "border-b-2 border-b-primary-orange p-2": path === pathname,
                  }
                )}
                to={path}
              >
                {name}
              </Link>
            </ul>
          ))}
        </ul>
      </nav>
      <nav className="flex flex-row items-center space-x-5">
        <img
          src="./images/icon-cart.svg"
          alt="cart-image"
          width={24}
          height={28}
        />
        <img
          className="hover:border-primary-orange hover:border-2 hover:rounded-full"
          src="./images/image-avatar.png"
          alt="user-image"
          width={34}
          height={36}
        />
      </nav>
    </header>
  );
};

export default Desktop;
