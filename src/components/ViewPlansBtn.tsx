import React from 'react'

type ViewPlansBtnProps = {
  btnTxt: string;
  width?: string;
  btnStyle: string;
};

const ViewPlansBtn: React.FC<ViewPlansBtnProps> = ({ btnTxt, width, btnStyle }) => {
  return (
    <button className={width} type="button">
      <a
        className={`uppercase transition-all duration-500 border font-semibold py-2 px-5 ${btnStyle}`}
        href="/"
      >
        {btnTxt}
      </a>
    </button>
  );
}

export default ViewPlansBtn