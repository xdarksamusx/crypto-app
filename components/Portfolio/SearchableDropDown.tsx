"use client";
import { useEffect, useRef, useState } from "react";
import DropDownArrow from "./DropDownArrow";
import axios from "axios";
const SearchableDropdown = ({
  selectedOption,
  setSelectedOption,
  options,
  label,
  id,
  selectedVal,
  handleChange,
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showList, setShowList] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fetchData = async (option) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${option}`
      );
      const data = response.data;

      return data;
    } catch (error) {
      setError({ error: "Failed to fetch data" });
    }
  };

  const inputRef = useRef(null);

  const selectOption = async (option) => {
    setQuery(() => "");
    handleChange(option[label]);
    setIsOpen((isOpen) => !isOpen);
    const data = await fetchData(option.id);
    setSelectedOption(data);
  };

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) return selectedVal;

    return "";
  };

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
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
            value={getDisplayValue()}
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
            setIsOpen={setIsOpen}
            setShowList={setShowList}
          />
        </div>
        <div className={`arrow ${isOpen ? "block" : "hidden"}`}></div>
      </div>

      {showList && (
        <div className={` ${isOpen ? "block" : "hidden"}`}>
          {filter(options).map((option, index) => {
            if (index >= 9) return;
            return (
              <div
                onClick={() => {
                  selectOption(option);
                  setIsOpen(false);
                }}
                className={`option ${
                  option[label] === selectedVal ? "selected" : ""
                }`}
                key={`${id}-${index}`}
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
