import w_blue from "../../assets/logos/w_blue.png";
const NavbarBlue = () => {
  return (
    <nav className="bg-white p-5 h-30 w-full shadow-lg m-0 flex justify-between items-center ">
      <img src={w_blue} alt="Logo" className="h-10" />

      <ul className="flex space-x-8 ml-auto">
        <li>
          <a
            href="/home"
            className="font-poppins block px-4 py-2 transition-transform duration-80 ease-in-out hover:scale-105"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/product"
            className="font-poppins block px-4 py-2 transition-transform duration-80 ease-in-out hover:scale-105"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="font-poppins block px-4 py-2 transition-transform duration-80 ease-in-out hover:scale-105"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="/support"
            className="font-poppins block px-4 py-2 transition-transform duration-80 ease-in-out hover:scale-105"
          >
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarBlue;
