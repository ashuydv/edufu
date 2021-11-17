import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.jpg';

const Nav = () => {
  return (
    <div>
      <header className="text-gray-600 body-font shadow-md sticky">
        <div className="container-1 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-xl text-blue-500 w-32">
                <img src={logo} alt="" />
            </span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-10 hover:text-gray-900">Virtual Tour</a>
            <a className="mr-10 hover:text-gray-900">Blogs</a>
            <a className="mr-10 hover:text-gray-900">Institutions</a>
            <a className="mr-10 hover:text-gray-900">Jobs</a>
            <a className="mr-0 hover:text-gray-900">Profile</a>
          </nav>
          <button className="mx-12">
            <i class="far fa-bell" aria-hidden="true"></i>            
          </button>
          <button className="inline-flex items-center border-2 border-blue-500 py-1 px-3 focus:outline-none text-blue-600 hover:bg-gray-50 rounded-lg text-base mt-4 md:mt-0">
            Account
            <span className=" ml-2 text-xs" >
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Nav;
