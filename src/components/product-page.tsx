import { product } from "../utils/utils";
import DeskImages from "./desk-product-images";
import MobImages from "./mob-product-images";
const Product = () => {
  return (
    <div className="container flex flex-col md:flex-row">
      <div className="block md:hidden">
        <MobImages images={product.images} />
      </div>
      <div className="hidden md:block">
        <DeskImages images={product.images} />
      </div>
      <div className="flex flex-col p-5 space-y-8 md:p-10">
        <div className="flex flex-col space-y-5">
          <span className="text-sm font-bold uppercase text-dark-grayish-blue ">
            Sneaker Company
          </span>
          <h1 className="text-4xl font-bold text-very-dark-blue">
            {product.name}
          </h1>
        </div>
        <p className="text-dark-grayish-blue">{product.description}</p>
        <div className="flex flex-row items-center justify-between space-y-5 md:flex-col md:items-start">
          <div className="flex flex-row items-center space-x-3">
            <span className="text-xl font-bold">
              ${product.price - product.discountRate * product.price}
            </span>
            <span className="px-2 py-0 text-white bg-black rounded-md">
              {product.discountRate * 100}%
            </span>
          </div>
          <span className="font-bold line-through text-dark-grayish-blue">
            ${product.price}
          </span>
        </div>
        <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:items-center md:space-x-5">
          <div className="flex flex-row justify-between p-4 rounded-md md:w-52 bg-light-grayish-blue">
            <button>
              <img src="./images/icon-minus.svg" alt="minus" />
            </button>
            <span>0</span>
            <button>
              <img src="./images/icon-plus.svg" alt="minus" />
            </button>
          </div>
          <button className="flex flex-row items-center justify-center p-4 space-x-5 rounded-md shadow-xl md:w-52 bg-primary-orange shadow-primary-pale-orange md:shadow-white">
            <img src="./images/icon-cart.svg" alt="cart" />
            <h1 className="font-bold"> Add to cart</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
