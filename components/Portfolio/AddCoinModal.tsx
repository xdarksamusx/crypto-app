"use client";

import CloseCircle from "./Closemark";
import { useState, useEffect } from "react";
import SearchableDropdown from "./SearchableDropDown";
import { addCoin, deleteCoin } from "../../redux/features/portfolioSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const AddCoinModal = ({
  setShowModal,
  showModal,
  allCoins,
  setShowInvestments,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState<Error | null>(null);

  const dispatch = useAppDispatch();

  const portfolio = useAppSelector((state) => state.portfolio.portfolio);

  // useEffect(() => {}, [selectedOption]);

  // fetchData();

  const handleInvestmentAmount = (e) => {
    const value = e.target.value;

    setInvestmentAmount(value);
  };

  const handleDate = (e) => {
    const value = e.target.value;
    setDate(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSave = () => {
    const item = {
      name: value,
      amountBought: investmentAmount,
      date: date,
      data: selectedOption,
    };

    dispatch(addCoin(item));
    setDate("");
    setValue("");
    setInvestmentAmount("");
  };

  const handleModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <div className="relative mx-auto">
          <div className="fixed inset-0 bg-gray-200 bg-opacity-60  backdrop-blur-xs z-0"></div>

          <div className="bg-red-500  bg-opacity-90  inset-x-0  w-[600px] py-7 absolute translate-x-2/3 translate-y-11  z-50 ">
            <div className=" px-8 flex  mb-6 justify-between">
              <p>Select Coins</p>
              <div className="close-button">
                <CloseCircle handleModal={handleModal} />
              </div>
            </div>

            <div className="flex items-stretch px-8  justify-between   ">
              <div className="w-34  flex flex-col    py-12 box-border bg-purple-600 mb-5 mt-5  h-[300px] ">
                <div className="px-8 py-0 flex flex-col justify-stretch items-center">
                  {selectedOption && (
                    <img
                      className="h-34 w-36 mx-auto"
                      src={`${selectedOption.image.large}`}
                      alt=""
                    />
                  )}
                  <p className="coin-name mt-4">Your coin</p>
                </div>
              </div>

              <div className="w-60 flex flex-col px-0 py-2 box-border mt-5  mb-2 h-[300px] justify-between  ">
                <SearchableDropdown
                  setSelectedOption={setSelectedOption}
                  selectedOption={selectedOption}
                  options={allCoins}
                  label="name"
                  id="id"
                  selectedVal={value}
                  handleChange={(val) => setValue(val)}
                />

                <input
                  onChange={(e) => handleInvestmentAmount(e)}
                  className=""
                  placeholder="Purchased Amount"
                  type="text"
                  value={investmentAmount}
                />
                <input
                  onChange={(e) => handleDate(e)}
                  className=""
                  placeholder="Purchased Date"
                  type="datetime-local"
                  value={date}
                />
                <div className="flex justify-between  px-0 py-0 mx-2 my-0 ">
                  <button
                    onClick={() => setShowModal(false)}
                    className=" px-2 py-2 rounded-md bg-yellow-300 cursor-pointer  box-border"
                  >
                    cancel
                  </button>
                  <button
                    onClick={() => handleSave()}
                    className=" px-2 py-2 rounded-md bg-yellow-300 cursor-pointer  box-border"
                  >
                    save and continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCoinModal;
