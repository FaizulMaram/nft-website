import { AiOutlineDiscord, AiOutlineMenu } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { Button } from "../../shared/Button";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Road Map", href: "#road-map" },
    { name: "Our Team", href: "#our-team" },
    { name: "FAQ", href: "#faq" },
    { name: "Partner", href: "#partner" },
  ];

  return (
    <div className="h-[90px] w-full flex items-center justify-between px-[30px] bg-[#040b11] fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="text-3xl font-bold text-white">
        <a href="#">NoxStar</a>
      </div>

      {/* Links (hidden on mobile) */}
      <ul className="hidden md:flex space-x-8">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="text-white hover:text-[#21e787] transition"
          >
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>

      {/* Buttons + Menu icon */}
      <div className="md:flex items-center gap-6 hidden">
        <Button text="Discord">
          <AiOutlineDiscord size={20} />
        </Button>

        <Button text="Contact">
          <IoWalletOutline size={20} />
        </Button>

        {/* Menu icon */}
      </div>
      <AiOutlineMenu
        size={26}
        className="text-black cursor-pointer p-1 h-10 w-10 bg-[#21e787] rounded flex items-center justify-center hover:shadow-[#00954d] hover:shadow-lg transition duration-300 md:hidden"
      />
    </div>
  );
};

export default Navbar;
