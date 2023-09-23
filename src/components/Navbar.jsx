import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { motion } from "framer-motion"
import { navVariants, slideIn } from "../utils/motion";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView="show"
     className="w-full flex py-6 justify-between items-center navbar">
      <motion.img 
         animate={{
          scale: [1, 2, 2, 1, 1],
         rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      src={logo} alt="hoobank_logo" className="w-[124px] h-[32px] " />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <motion.li
          variants={slideIn('down', "tween", (index+1)*.5, 1)}
          initial='hidden'
          whileInView='show'
          whileHover={{scale:1.5, color:"#70E5E9"}}
            key={nav.id}
            className={`${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white font-poppins font-normal cursor-pointer text-[16px]`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </motion.li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white font-poppins font-normal cursor-pointer text-[16px]`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
