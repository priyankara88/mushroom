import { Link } from "@tanstack/react-router";

import fungifinder from "../assets/fungi-finders.svg";

export const Navbar = () => {
  return (
    <div className="w-full h-[60px] flex justify-between">
      <img src={fungifinder} alt="" />
      <nav className="flex mt-[16px] mb-[12px] gap-4 text-white">
        <ol>
          <Link to={"/"}>Dicover</Link>
        </ol>
        <ol>
          <Link to="/">Mushroom</Link>
        </ol>
        <ol>
          <Link to="/">Faq</Link>
        </ol>
      </nav>
    </div>
  );
};

export default Navbar;
