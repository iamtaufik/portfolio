import React, { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const hamburgerActive = () => {
    setIsActive(!isActive);
  };

  window.onscroll = () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
    } else {
      header.classList.remove('navbar-fixed');
    }
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className="font-bold text-lg text-primary block py-6">
              muhammadtaufik
            </a>
          </div>
          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" className={`block absolute right-4 lg:hidden ${isActive ? 'hamburger-active' : ''} `} onClick={() => hamburgerActive()}>
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav id="nav-menu" className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${isActive ? '' : 'hidden'}`}>
              <ul className="block lg:flex">
                <li className="group">
                  <a href="#home" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a href="#about" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a href="#portfolio" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a href="#clients" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                    Clients
                  </a>
                </li>
                <li className="group">
                  <a href="#blog" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                    Blog
                  </a>
                </li>
                <li className="group">
                  <a href="#contact" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
