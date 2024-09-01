type route = {
  name: string;
  path: string;
};
const routes: route[] = [
  { path: "/collections", name: "Collections" },
  { path: "/men", name: "Men" },
  { path: "/women", name: "Women" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];

type Product = {
  name: string;
  price: number;
  discountRate: number;
  description: string;
  images: {
    key: string;
    thumbnail: string;
    image: string;
  }[];
};
const product: Product = {
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250.0,
  discountRate: 0.5,
  images: [
    {
      key: "1",
      thumbnail: "./images/image-product-1-thumbnail.jpg",
      image: "./images/image-product-1.jpg",
    },
    {
      key: "2",
      thumbnail: "./images/image-product-2-thumbnail.jpg",
      image: "./images/image-product-2.jpg",
    },
    {
      key: "3",
      thumbnail: "./images/image-product-3-thumbnail.jpg",
      image: "./images/image-product-3.jpg",
    },
    {
      key: "4",
      thumbnail: "./images/image-product-4-thumbnail.jpg",
      image: "./images/image-product-4.jpg",
    },
  ],
};
export { routes, product };
