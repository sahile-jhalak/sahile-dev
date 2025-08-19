import React from "react";

import { logo } from "../../assets";
import { styles } from "../../styles";

const Footer = () => {
  return (
    <div className="  flex justify-evenly align-center relative  sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20 select-none">
      <div className="flex  flex-col items-center">
        <img src={logo} alt="logo" className="w-36  mb-5" />

        <p className="text-secondary text-[17px] leading-[30px] text-center   left-0 right-0 cle">
          {new Date().getFullYear()} &copy; Sahil All rights reserved.
        </p>
      </div>

      <div>
        <a
          href="/"
          className="w-fit abhishek mx-auto flex items-center justify-center gap-6 bg-tertiary lg:px-7 lg:py-3 px-4 py-2 rounded-xl lg:mt-10 mt-5 cursor-pointer max-[350px]:hidden select-none"
        >
          <div className="group border-[3px] border-white rounded-full h-12 w-7 flex justify-center lg:scale-100 scale-75">
            <div className="bg-white h-3 w-1 rounded-full mt-[10px] animate-bounce lg:scale-100 scale-75"></div>
          </div>

          <a>
          <img src="https://hitwebcounter.com/counter/counter.php?page=17226100&style=0005&nbdigits=4&type=page&initCount=0" title="Counter Widget" alt="Visit counter For Websites"   border="0" />
          </a>

          <p className={styles.sectionSubText}>Portfolio Visits</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
