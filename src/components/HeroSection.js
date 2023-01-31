import React from 'react';
import PassFoto from '../assets/my-profile-pic.png';

const HeroSection = () => {
  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Halo Semua 👋, Saya <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Muhammad Taufik Hidayat </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
              Mahasiswa & <span className="text-dark">Web Developer</span>
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis exercitationem, alias quos esse dolor!</p>
            <a href="#contact" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full  hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
              Hubungi Saya
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="mt-10 relative lg:mt-9 lg:right-0">
              <img src={PassFoto} alt="Muhammad Taufik Hidayat" className="max-w-full mx-auto" />
              {/* gambar 500x500 */}
              <span className="absolute bottom-0 -z-10 lef-1/2 lg:left-1/4 -translate-x-1/2 md:scale-115">
                <svg width="375" height="375" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#06b6d4"
                    d="M58.3,-55.8C74,-42.6,84.2,-21.3,80.3,-3.9C76.4,13.4,58.3,26.8,42.5,42.5C26.8,58.1,13.4,76,-2.1,78.1C-17.6,80.2,-35.2,66.5,-44.8,50.9C-54.3,35.2,-55.8,17.6,-55.8,0C-55.8,-17.6,-54.3,-35.3,-44.8,-48.5C-35.3,-61.7,-17.6,-70.5,1.8,-72.4C21.3,-74.2,42.6,-69,58.3,-55.8Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
