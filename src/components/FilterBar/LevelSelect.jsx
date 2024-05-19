"use client";
import { useState } from "react";
import { levels } from "@/data/constants";
import Link from "next/link";

export function LevelSelect({ parameters, pathname }) {
  const { bosqich, soha } = parameters;

  const [selectedOption, setSelectedOption] = useState(bosqich ? bosqich : "Barchasi");
  const [isOpen, setIsOpen] = useState(false);

  const hadnleSelect = (option) => {    
    setSelectedOption(option);
    toggleDropdown();
  };

  const toggleDropdown = () => {    
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full h-[60px]">
      <div
        className={`px-[18px] pt-6 pb-2 w-full h-full text-lg outline-none transition-all duration-300 ease-in-out cursor-pointer rounded-l-xl border border-solid ${
          isOpen
            ? "border-primary bg-white"
            : "border-transparent bg-[#f5f5f5] hover:border-neutral-grey-light"
        }`}
        onClick={toggleDropdown}
      >
        <span className="absolute top-2 left-5 text-sm text-neutral-grey">
          Soha
        </span>
        {selectedOption}
      </div>
      {isOpen && (
        <div
          className="options-list mt-3 bg-white rounded-xl p-2 z-10 relative"
          style={{
            boxShadow:
              "0 -2px 6px rgb(0 0 0 / 2%), 0 10px 14px rgb(20 36 56 / 6%)",
          }}
        >
          <ul className="overflow-y-scroll h-[240px] bg-white flex flex-col py-4 px-2">
          <Link
                href={{
                  pathname: pathname,
                  query: {                    
                    ...(soha ? {soha} : {}),                     
                  }
                }}                           
                onClick={() => hadnleSelect("Barchasi")}
                className={selectedOption === "Barchasi" ? "bg-[#f5f5f5] options" : "options"}
              >
                Barchasi
              </Link>
            {levels.map((option, index) => (
              <Link
                href={{
                  pathname: pathname,
                  query: {
                    bosqich: option,
                    ...(soha ? {soha} : {}),                     
                  }
                }}
                key={index}                
                onClick={() => hadnleSelect(option)}
                className={selectedOption === option ? "bg-[#f5f5f5] options" : "options"}
              >
                {option}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
