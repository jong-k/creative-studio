import { useState } from "react";
import chevronDownSvg from "../../assets/chevron-down.svg";
import "./index.scss";

interface OptionType {
  name: string;
  value: string | number;
}

interface DropdownProps {
  /**
   * 옵션타입 배열 예) [ { name: "의사", value: "doctor"} ]
   */
  options: readonly OptionType[];
}

/**
 * 드롭다운
 */
export default function Dropdown({ options }: DropdownProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isDropped, setIsDropped] = useState(false);

  const selectOption = (idx: number) => {
    setCurrentIdx(idx);
    if (isDropped) setIsDropped(false);
  };

  const toggleDrop = () => {
    setIsDropped(!isDropped);
  };
  // 테일윈드를 css로 변경 필요

  const opacity = isDropped ? "opacity-100" : "opacity-0";
  const dropTransform = isDropped ? "translate-y-[0%]" : "translate-y-[-20%]";
  const isVisible = isDropped ? "visible" : "invisible";

  return (
    <div className="dropdownWrapper">
      <div className="w-[435px] h-[40px] flex justify-between items-center a border border-slate-200 rounded-md">
        <h2 className="text-lg ml-3">{options[currentIdx].name}</h2>
        <div
          className="w-[40px] h-[40px] bg-[#535884] rounded-r-md"
          onClick={toggleDrop}
        >
          <img src={chevronDownSvg} alt="드롭다운 선택" />
        </div>
      </div>
      <div
        className={[
          "rounded-b-lg bg-white border border-slate-200 absolute w-full overflow-auto z-10 mt-1 transition ease-in-out duration-200",
          `${opacity}`,
          `${dropTransform}`,
          `${isVisible}`,
        ].join(" ")}
      >
        {options &&
          options.map((option, i) => {
            return i === 0 ? (
              <div
                className="w-full h-[40px] text-lg pl-3 flex flex-col justify-center hover:bg-blue-400"
                key={i}
                onClick={() => selectOption(i)}
              >
                <p>{option.name}</p>
              </div>
            ) : (
              <div
                className="w-full h-[40px] text-lg pl-3 flex flex-col justify-center border-t hover:bg-blue-400"
                key={i}
                onClick={() => selectOption(i)}
              >
                <p>{option.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
