import React from 'react';
import Docta from '../assets/porto-1.png';
import weatherApp from '../assets/weather-app.png';
import landingPage from '../assets/landing-page.png';

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-36 pb-32 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Portfolio</h4>
            <h2 className="font-bold text-dark text-3xl mb-4">Project Terbaru</h2>
            <p className="font-medium text-md text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div class="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={Docta} alt="Docta" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-3 mb-5">Landing Page Docta</h3>
            <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab aliquam voluptatum.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={weatherApp} alt="Weather App" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-3 mb-5">Landing Page Docta</h3>
            <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab aliquam voluptatum.</p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={landingPage} alt="Landing Page Muhammad Taufik" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-3 mb-5">Landing Page Docta</h3>
            <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab aliquam voluptatum.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
