import { Link } from "react-router-dom";
import { routes } from "../utils/utils";
import { useState } from "react";
import clsx from "clsx";

const Mobile = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header className="flex flex-row items-center justify-between p-4 border-b sm:p-0 h-14 sm:hidden sm:h-auto sm:border-0">
      <nav>
        <div className="flex flex-row items-center space-x-2">
          <button onClick={handleToggle}>
            <img
              src="./images/icon-menu.svg"
              alt="menu-icon"
              width={20}
              height={22}
            />
          </button>
          <h1 className="text-2xl font-black">Sneakers</h1>
        </div>
        <div
          className={clsx(
            "absolute top-0 left-0 w-1/2 bg-white p-5 transition-transform",
            {
              hidden: !toggle,
            }
          )}
        >
          <button onClick={handleToggle}>
            <img
              src="./images/icon-close.svg"
              alt="close-icon"
              width={18}
              height={20}
            />
          </button>
          <ul className="flex flex-col mt-8 space-y-5 text-lg font-bold">
            {routes.map(({ path, name }) => (
              <li key={path}>
                <Link to={path} onClick={handleToggle}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
          alt="user-avatar"
          width={34}
          height={36}
        />
      </nav>
    </header>
  );
};

export default Mobile;
