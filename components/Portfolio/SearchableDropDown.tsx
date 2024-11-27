"use client";
import { useEffect, useRef, useState } from "react";
import DropDownArrow from "./DropDownArrow";
import Link from "next/link";
import axios from "axios";

interface CoinOption {
  id: string;
  name: string;
  symbol: string;
  image: {
    large: string;
    small: string;
    thumb: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    price_change_24h_in_currency: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    circulating_supply: number;
    max_supply: number;
  };
}

type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

interface SearchableDropdownProps {
  setSelectedOption: (option: CoinOption | null) => void;
  options: CoinOption[];
  label: StringKeys<CoinOption>;
  id: string;
  selectedVal: string;
  handleChange: (value: any) => void;
  href?: (id: string) => string; // Optional function to generate href links
}

interface Error {
  error: string;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  setSelectedOption,
  options,
  label,
  id,
  selectedVal,
  handleChange,
  href, // Optional href generator
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [showList, setShowList] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const inputRef = useRef(null);

  const handleSelectOption = async (option: CoinOption) => {
    setQuery(() => "");
    handleChange(option.name);
    setIsOpen((isOpen) => !isOpen);

    setSelectedOption(option);
  };

  const handleGetDisplayValue = () => {
    if (query) return query;
    if (selectedVal) return selectedVal;

    return "";
  };

  const handleFilter = (options: CoinOption[]) => {
    return options.filter((option: CoinOption) => {
      const value = option[label];
      if (typeof value === "string") {
        return value.toLowerCase().indexOf(query.toLowerCase()) > -1;
      }
      return false;
    });
  };

  return (
    <div className="w-64 relative">
      <div className="w-full ">
        <div
          ref={inputRef}
          onClick={() => {
            setIsOpen(true);
            setShowList(true);
          }}
          className="selected-value flex bg-gray-200 justify-between items-center px-4  rounded border border-gray-300 cursor-pointer"
        >
          <input
            className="bg-gray-200 focus:outline-none w-full"
            ref={inputRef}
            type="text"
            value={handleGetDisplayValue()}
            name="searchTerm"
            placeholder="Search..."
            onChange={(e) => {
              setQuery(e.target.value);
              handleChange(null);
              setShowList(true);
              setIsOpen(true);
            }}
          />
          <DropDownArrow
            isOpen={isOpen}
            showList={showList}
            setIsOpen={setIsOpen}
            setShowList={setShowList}
          />
        </div>
        <div className={`arrow ${isOpen ? "block" : "hidden"}`}></div>
      </div>

      {showList && (
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute left-0 mt-1 z-50 w-full bg-white border border-gray-300 rounded shadow-lg`}
        >
          {handleFilter(options).map((option, index) => {
            if (index >= 9) return null;
            return (
              <div
                key={`${id}-${index}`}
                className="px-4  hover:bg-gray-100 cursor-pointer"
              >
                {href ? (
                  <Link href={href(option.id)} className="block">
                    {option[label]}
                  </Link>
                ) : (
                  <div
                    onClick={() => {
                      handleSelectOption(option);
                      setIsOpen(false);
                    }}
                    className={`option ${
                      option[label] === selectedVal ? "font-bold" : ""
                    }`}
                  >
                    {option[label]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
