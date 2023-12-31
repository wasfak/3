/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect } from "react";

const Header = () => {
  const headerRef = useRef(null);
  const stikyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stikyHeaderFunc();
    return window.removeEventListener("scroll", stikyHeaderFunc);
  }, []);

  const handelClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };
  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center bg-[#1d1d1d]"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounder-full flex items-center justify-center">
              S
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-white font-[700]">Standards</h2>
              <p className="text-white text-[14px] font-[500] ">group</p>
            </div>
          </div>
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handelClick}
                  className="text-white font-[400] hover:text-[#06d889] ease-in-out"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={handelClick}
                  className="text-white font-[400] hover:text-[#06d889]"
                  href="#approach"
                >
                  Approach
                </a>
              </li>
              <li>
                <a
                  onClick={handelClick}
                  className="text-white font-[400] hover:text-[#06d889]"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handelClick}
                  className="text-white font-[400] hover:text-[#06d889]"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handelClick}
                  className="text-white font-[400] hover:text-[#06d889]"
                  href="#members"
                >
                  Members
                </a>
              </li>
              <li>
                <a
                  onClick={handelClick}
                  className="text-white font-[400] hover:text-[#06d889]"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-white font-[600] border border-solid border-text-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-[#06d889] hover:text-white hover:font-[500] easy-in duration-300 ">
              <i className="ri-send-plane-line"></i> Let's Talk
            </button>
            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer ">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
