import { useEffect, useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

import { FaArrowCircleUp } from "react-icons/fa";
import Button from "../components/Button";

const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Service",
    path: "/service",
  },
  {
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    label: "Testimonials",
    path: "/testimonials",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleBegin = (to, element) => {
      console.log("begin", to, element);
    };
    Events.scrollEvent.register("begin", handleBegin);

    const handleEnd = (to, element) => {
      console.log("end", to, element);
    };
    Events.scrollEvent.register("end", handleEnd);

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <>
      <nav
        className={` flex justify-between items-center py-4 md:px-10 px-4 fixed z-50 w-full top-0 bg-white text-black`}
      >
        <Link
          to="/"
          className={`text-2xl font-bold flex justify-center items-center gap-2 `}
        >
          KA.
        </Link>

        <ul className="max-lg:hidden">
          {navLinks.map((navlink) => (
            <li key={navlink.label} className="inline-block px-8">
              <Link
                to={navlink.path}
                className="font-montserrat text-base leading-normal cursor-pointer"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActive}
              >
                {navlink.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:gap-x-6 gap-x-4 flex items-center justify-center">
          <Button text={"Let's Talk"} />
          <TbMenu2
            className={`max-lg:block hidden text-3xl cursor-pointer `}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
      </nav>

      {}
      {isMenuOpen && (
        <div>
          <nav className="lg:bottom-auto bg-yellow-500 fixed top-16 bottom-0 left-0 right-0 z-[9999999] ">
            <div
              className="max-lg:block fixed right-0 hidden px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <MdOutlineCancelPresentation className=" text-3xl text-white" />
            </div>
            <ul className=" lg:hidden bg-1 gap-y-7 z-40 flex flex-col items-center justify-center h-full cursor-pointer">
              {navLinks.map((navlink) => (
                <li
                  key={navlink.label}
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    window.scrollTo(0, 8000);
                  }}
                >
                  <Link
                    to={navlink.path}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    className="font-montserrat active:text-black text-2xl leading-normal text-white"
                  >
                    {navlink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <button
        className="bg-yellow-500 w-14 h-14 rounded-full fixed bottom-[3rem] md:right-12 right-6 z-50 flex justify-center items-center cursor-pointer"
        onClick={() => {
          scrollToTop();
        }}
      >
        <FaArrowCircleUp className="text-4xl" />
      </button>
    </>
  );
};

export default Navbar;
