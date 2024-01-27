import React, { useState, useEffect } from "react";
import logo from "../assets/gdsclogo.svg";
import dextertitle from "../assets/dextertitle.svg";
import regbutton from "../assets/regbutton.svg";
import dexterlog from "../assets/dexterlog.svg";
import spaceImage from "../assets/space.svg";
import backgroundImage from "../assets/bg1.svg";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import bullet1 from "../assets/bullet1.svg";
import bullet2 from "../assets/bullet2.svg";
import bullet3 from "../assets/bullet3.svg";
import bullet4 from "../assets/bullet4.svg";

const Navbar = ({ isSticky, toggleMenu, isMenuOpen, navItems }) => {
  return (
    <header className="w-full bg-white md-bg-transparent fixed top-0 left-0 right-0 z-10 ">
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
  // const controlsBullet = useAnimation();
  // const [bulletIndex, setBulletIndex] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const controlsTitle = useAnimation();
  const controlsLogo = useAnimation();
  const controlsButton = useAnimation();
  // const controlsSpace = useAnimation();

  // const bulletImages = [bullet1, bullet2, bullet3, bullet4];

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
    // const spaceAnimation = async () => {
    //   while (true) {
    //     await controlsSpace.start({
    //       y: [0, -20, 0, 20, 0], // Define a sequence of motion (up, down, up, down, ...)
    //       transition: { duration: 2, repeat: Infinity },
    //     });
    //   }
    // };
    // const bulletAnimation = async () => {
    //   while (true) {
    //     for (let i = 0; i < bulletImages.length; i++) {
    //       setBulletIndex(i);
    //       await controlsBullet.start({
    //         opacity: 1,
    //         transition: { duration: 0.005 },
    //       });
    //       await controlsBullet.start({
    //         opacity: 0.5,
    //         transition: { duration: 0.005 },
    //       });
    //       await controlsBullet.start({
    //         opacity: 0,
    //         transition: { duration: 0.005 },
    //       });
    //     }
    //   }
    // };
    spaceAnimation();
    buttonAnimation();
    // bulletAnimation();
    return () => {
      controlsButton.stop();
      controlsBullet.stop();
    };
  }, [
    controlsTitle,
    controlsLogo,
    controlsButton,
  ]);
  //   controlsSpace,
  //   controlsBullet,
  // ]);

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
      className="bg-cover bg-center h-screen overflow-x-hidden relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar
        isSticky={isSticky}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        navItems={navItems}
      />
{/*       <div className="hidden lg:block">
        <motion.img
          src={spaceImage}
          alt="Space"
          className="absolute z-10 top-1/3 left-1/5 transform -translate-y-1/2"
          initial="hidden"
          animate={controlsSpace}
        />

{/*       <motion.img
        src={bulletImages[bulletIndex]}
        alt={`Bullet ${bulletIndex + 1}`}
        className="absolute z-10 left-1/4 top-1/2 transform -translate-y-1/2"
        initial="hidden"
        animate={controlsBullet}
      /> */}
      </div> */}

      {/* Display the bullet image based on the current index */}

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
