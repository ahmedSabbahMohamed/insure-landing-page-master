import React from "react";
import ViewPlansBtn from "./ViewPlansBtn";
import introDesk from "../assets/images/image-intro-desktop.jpg";
import intorMobile from "../assets/images/image-intro-mobile.jpg";
import leftDesk from "../assets/images/bg-pattern-intro-left-desktop.svg";
import rightDesk from "../assets/images/bg-pattern-intro-right-desktop.svg";

const Hero: React.FC = () => {
  return (
    <div className="bg-primary-dark-violet min-h-[600px] flex justify-center items-center relative">
      <div className="container mx-auto flex flex-col-reverse sm:flex-row sm:items-start gap-5">
        <div className="flex-1 flex flex-col gap-5 items-start px-3 py-8 static z-40">
          <h1 className="text-natural-very-light-gray text-4xl font-bold">
            Humanizing
            <br />
            your insurance.
          </h1>
          <p className="text-natural-very-light-gray text-lg">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <ViewPlansBtn
            btnTxt="view plans"
            btnStyle="text-natural-very-light-gray border-natural-very-light-gray hover:bg-natural-very-light-gray hover:text-primary-dark-violet"
          />
        </div>

        <div className="flex-1 w-full min-h-[300px] sm:h-0 sm:relative bg-cyan-400">
          <img className="absolute top-0 hidden sm:block w-full" src={introDesk} />
          <img className="w-full" src={intorMobile} alt="" />
        </div>
      </div>
      <img
        className=" absolute -bottom-1/2 left-0"
        src={leftDesk}
        alt="hero-decoration"
      />
      <img
        className=" absolute top-0 right-0 hidden sm:block"
        src={rightDesk}
        alt="hero-decoration"
      />
    </div>
  );
};

export default Hero;
