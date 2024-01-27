import React, { useState, useEffect } from "react";
import logo from "../assets/gdsclogo.svg";
import dextertitle from "../assets/dextertitle.svg";
import regbutton from "../assets/regbutton.svg";
import dexterlog from "../assets/dexterlog.svg";
import backgroundImage from "../assets/bg1.svg";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";

const Navbar = ({ isSticky, toggleMenu, isMenuOpen, navItems }) => {
  return (
    <header className="w-full bg-white md-bg-transparent fixed top-0 left-0 right-0 z-10 overflow-x-hidden">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between item-center text-base gap-8">
          <a
            href="#"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              alt=""
              className="w-80 initial-block items-center"
            />
          </a>
          <ul className="md:flex space-x-12 hidden items-center font-semibold">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-emerald-900 hover:text-emerald-500 "
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-emerald-900"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  className="text-emerald-900"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 14a1 1 0 100 2h12a1 1 0 100-2H4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-primary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-white hover:text-emerald-900"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const controlsTitle = useAnimation();
  const controlsLogo = useAnimation();
  const controlsButton = useAnimation();

  useEffect(() => {
    controlsTitle.start("visible");
    controlsLogo.start("visible");

    const buttonAnimation = async () => {
      while (true) {
        await controlsButton.start({
          scale: 1.08,
          transition: { duration: 0.8 },
        });
        await controlsButton.start({ scale: 1, transition: { duration: 0.5 } });
      }
    };
    buttonAnimation();
    return () => {
      controlsButton.stop();
    };
  }, [controlsTitle, controlsLogo, controlsButton]);

  const navItems = [
    {
      id: 1,
      link: "About",
      path: "about",
    },
    {
      id: 2,
      link: "FAQ",
      path: "faq",
    },
  ];

  return (
    <div
      className="bg-cover bg-center h-screen overflow-x-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar
        isSticky={isSticky}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        navItems={navItems}
      />
      <div className="flex flex-col justify-center items-center mt-16">
        <motion.img
          src={dextertitle}
          alt="Dexter Title"
          className="lg:w-[30vw] w-[80vw] lg:py-2 pt-28 mt-6"
          initial="hidden"
          animate={controlsTitle}
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
        />
        <div className="flex justify-center p-2">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf2nx0bCKlK12hJF5GKsCf-kZ36h52X3S9m1rARjoWZVJwxDw/formrestricted?pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              src={regbutton}
              alt="Registration Button"
              className="lg:w-[15vw] w-[50vw] lg:py-5"
              initial="hidden"
              animate={controlsButton}
            />
          </a>
        </div>
        <div className="flex justify-center">
          <motion.img
            src={dexterlog}
            alt="Dexter Logo"
            className="lg:w-[25vw] w-[80vw] lg:py-3 py-8"
            initial="hidden"
            animate={controlsLogo}
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
