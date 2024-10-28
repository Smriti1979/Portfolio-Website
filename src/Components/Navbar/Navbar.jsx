import React, { useState, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    };

    return (
        <div className="flex justify-between items-center p-4">
            <img src={menu_open} onClick={openMenu} alt="" className="md:hidden cursor-pointer" />
            <ul ref={menuRef} className="fixed top-0 right-[-350px] bg-gray-800 h-full w-[350px] transition-all duration-300 flex flex-col items-center justify-center gap-8 md:static md:flex-row md:justify-center md:h-auto md:w-auto md:bg-transparent md:gap-14">
                <img src={menu_close} onClick={closeMenu} alt="" className="md:hidden cursor-pointer self-end m-4" />
                <li><AnchorLink className="text-white no-underline hover:text-gray-400" offset={50} href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>
                <li><AnchorLink className="text-white no-underline hover:text-gray-400" offset={50} href="#about"><p onClick={() => setMenu("about")}>About</p></AnchorLink></li>
                <li><AnchorLink className="text-white no-underline hover:text-gray-400" offset={50} href="#services"><p onClick={() => setMenu("services")}>Services</p></AnchorLink></li>
                <li><AnchorLink className="text-white no-underline hover:text-gray-400" offset={50} href="#work"><p onClick={() => setMenu("portfolio")}>My Work</p></AnchorLink></li>
                <li><AnchorLink className="text-white no-underline hover:text-gray-400" offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>
            </ul>
        </div>
    );
};

export default Navbar;
