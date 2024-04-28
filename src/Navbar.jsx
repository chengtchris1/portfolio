import { FaLinkedin } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
const Navbar = () => {
  return (
    <>
      <div className="navbar z-30 font-sans backdrop-blur backdrop-brightness-[70%]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/*<ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className='p-2'>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
          </ul>*/}
          </div>
          <a className="btn btn-ghost text-xl text-white">
            <span>
              <span className="opacity-50">{"<"}</span>
              <span>{"Chris Cheng"}</span>
            </span>
            <span className="opacity-50">{"/>"}</span>
            <span className="hidden font-light opacity-25 sm:flex">|</span>{" "}
            <span className="hidden font-light sm:flex ">
              Fullstack Developer
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/*
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className='p-2'>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>*/}
        </div>
        <div className="navbar-end">
          <FaLinkedin
            className="mx-3"
            onClick={() => {
              window.open("https://www.linkedin.com/in/chengtchris/");
            }}
          />
          <LuGithub
            className="mx-3"
            onClick={() => {
              window.open("https://github.com/chengtchris1");
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Navbar;
