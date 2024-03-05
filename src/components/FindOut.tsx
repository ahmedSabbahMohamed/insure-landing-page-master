import React from 'react'
import howWork from "../assets/images/bg-pattern-how-we-work-desktop.svg"
import howWorkMobile from "../assets/images/bg-pattern-how-we-work-mobile.svg"
import ViewPlansBtn from './ViewPlansBtn';

const FindOut: React.FC = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="my-28 px-8 flex items-center justify-center bg-primary-dark-violet rounded-lg h-[250px] relative overflow-hidden">
        <img
          className="absolute top-0 right-0 hidden sm:block"
          src={howWork}
          alt=""
        />
        <img
          className="absolute top-0 right-0 sm:hidden"
          src={howWorkMobile}
          alt=""
        />
        <div className="flex justify-between flex-col gap-8 md:flex-row items-center w-full static z-40">
          <h2 className=" text-natural-very-light-gray text-5xl font-bold text-center md:text-left">
            Find out more
            <br />
            about how we work
          </h2>
          <ViewPlansBtn btnTxt='how we work' btnStyle="text-natural-very-light-gray border-natural-very-light-gray hover:bg-natural-very-light-gray hover:text-primary-dark-violet" />
        </div>
      </div>
    </div>
  );
}

export default FindOut