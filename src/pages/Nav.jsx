import {
  IconAddressBook,
  IconFileDescription,
  IconHome2,
  IconQuestionMark,
  IconServer,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Nav() {
  const listLink = [
    {
      id: 1,
      item: "Home",
      path: "/",
    },
    {
      id: 2,
      item: "About Me",
      path: "/about",
    },
    {
      id: 3,
      item: "Services",
      path: "/services",
    },
    {
      id: 4,
      item: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 5,
      item: "Contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <nav className="py-2 px-7 flex justify-between items-center relative z-[999] md:static md:px-12 md:py-4 ">
        <div className="text-3xl md:text-4xl cursor-pointer">Brand</div>
        <div className="hamburger-menu md:hidden">
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white my-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </div>
        <input
          type="checkbox"
          className="w-7 h-7 absolute top-3 z-[999] right-6 hamburger-menu hover:cursor-pointer opacity-0"
        />
        <div className="list-link bg-[#4848aaea] absolute top-[3.2rem] right-0 py-5 md:py-0 text-center z-[999] w-[50%] flex flex-col items-center gap-y-7 translate-x-[100%] transition md:translate-x-0 md:static md:h-auto md:flex-row md:w-auto md:pt-0 md:gap-x-4 md:bg-inherit xl:gap-x-14">
          {listLink.map((link) => {
            return (
              <Link
                to={link.path}
                key={link.id}
                className="transition hover:scale-105 w-[80%] hover:bg-[#5D5DDC] rounded-md py-1 flex justify-evenly md:py-0 md:rounded-none md:hover:bg-inherit md:w-auto md:hover:scale-100 md:hover:text-yellow-500"
              >
                {link.item}
                <span className="md:hidden">
                  {link.item === "Home" ? (
                    <IconHome2 />
                  ) : link.item === "About Me" ? (
                    <IconQuestionMark />
                  ) : link.item === "Services" ? (
                    <IconServer />
                  ) : link.item === "Portfolio" ? (
                    <IconFileDescription />
                  ) : link.item === "Contact" ? (
                    <IconAddressBook />
                  ) : (
                    ""
                  )}
                </span>
              </Link>
            );
          })}
        </div>
        <button className="hidden md:inline-block bg-yellow-500 px-6 py-2 rounded-full box-border border-2 border-yellow-500 hover:bg-inherit">
          Download CV
        </button>
      </nav>
    </>
  );
}

export default Nav;
