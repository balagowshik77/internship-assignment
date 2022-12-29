import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import akarIconschevronDo from "../assets/akarIconschevronDo.svg";
import frame from "../assets/frame.svg";

const NavBarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 sm:w-full">
      <div className="md:flex-[2] flex-initial justify-center items-center">
        <div className="w-full flex justify-start ml-8">
          <img src={frame} />
          <h1 className="font-bold text-2xl flex justify-center items-center">
            Policy Mart
          </h1>
        </div>
      </div>
      <ul className="text-[#646464] md:flex hidden list-none flex-row justify-between items-center flex-initial font-medium">
        {["Insurance", "About", "Articles", "Contact Us"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#00
            A78E] text-white py-2 px-7 mx-4 rounded-full cursor-pointer font-semibold hover:bg-[#00a767]">
          Join as POSP
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl bg-slate-500 md:hidden list-none
            flex flex-col justify-start items-end rounded-md  text-black animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Insurance", "About", "Articles", "Contact Us"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
