import React, { MouseEventHandler } from "react";

type CustomButtonType = {
  btnType: "submit" | "reset" | "button" | undefined;
  title: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  styles?: string;
};

const CustomButton = ({
  btnType,
  title,
  handleClick,
  styles,
}: CustomButtonType) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] hover:bg-green-700 bg-green-600 uppercase leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
