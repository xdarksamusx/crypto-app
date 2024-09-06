"use client";
import { useEffect, useRef, useState } from "react";
import DropDownArrow from "./DropDownArrow";
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
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [showList, setShowList] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fetchData = async (optionId: string) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${optionId}`
      );
      const data = response.data;

      return data;
    } catch (error) {
      setError({ error: "Failed to fetch data" });
    }
  };

  const inputRef = useRef(null);

  const handleSelectOption = async (option: CoinOption) => {
    setQuery(() => "");
    handleChange(option.name);
    setIsOpen((isOpen) => !isOpen);

    const data = await fetchData(option.id);

    const transformedData: CoinOption = {
      id: data.id,
      name: data.name,
      symbol: data.symbol,
      image: {
        large: data.image.large,
        small: data.image.small,
        thumb: data.image.thumb,
      },
      market_data: {
        current_price: {
          usd: data.market_data?.current_price?.usd || 0,
        },
        price_change_24h_in_currency: {
          usd: data.market_data?.price_change_24h_in_currency?.usd || 0,
        },
        market_cap: {
          usd: data.market_data?.market_cap?.usd || 0,
        },
        total_volume: {
          usd: data.market_data?.total_volume?.usd || 0,
        },
        circulating_supply: data.market_data?.circulating_supply || 0,
        max_supply: data.market_data?.max_supply || 0,
      } || {
        current_price: { usd: 0 },
        price_change_24h_in_currency: { usd: 0 },
        market_cap: { usd: 0 },
        total_volume: { usd: 0 },
        circulating_supply: 0,
        max_supply: 0,
      },
    };

    setSelectedOption(transformedData);

    setSelectedOption(transformedData);
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
    <div className="dropdown">
      <div className="control">
        <div
          ref={inputRef}
          onClick={() => {
            setIsOpen(true);
            setShowList(true);
          }}
          className="selected-value flex bg-gray-200 w-1/6 "
        >
          <input
            className="bg-gray-200 focus:outline-none"
            ref={inputRef}
            type="text"
            value={handleGetDisplayValue()}
            name="searchTerm"
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
        <div className={` ${isOpen ? "block" : "hidden"}`}>
          {handleFilter(options).map((option, index) => {
            if (index >= 9) return;
            return (
              <div
                onClick={() => {
                  handleSelectOption(option);
                  setIsOpen(false);
                }}
                className={`option ${
                  option[label] === selectedVal ? "selected" : ""
                }`}
                key={`${id}`}
              >
                {option[label]}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
