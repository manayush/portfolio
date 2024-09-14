import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Resumeee.pdf";
import hero from "./data/hero.json";

const Home = () => {

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          
          <h1>Welcome to my profile This is Ayush Gupta I'm an aspiring Software Devloper & a full stack developer</h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
