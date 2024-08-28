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

export { routes };
