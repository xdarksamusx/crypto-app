"use client";

import CloseCircle from "./Closemark";
import { useState, useEffect } from "react";
import SearchableDropdown from "./SearchableDropDown";
import { addCoin, deleteCoin } from "../../redux/features/portfolioSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Portfolio } from "@utils/portfolioInterface";
interface AddCoinModalProps {
  setShowModal: (value: boolean) => void;
  allCoins: any[];
}

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

const AddCoinModal: React.FC<AddCoinModalProps> = ({
  setShowModal,
  allCoins,
}) => {
  const fetchData = async () => {
    console.log("selected option", selectedOption);
    const data =
      await fetch(`https://api.coingecko.com/api/v3/coins/${selectedOption.id}
      `);

    return await data.json();
  };

  const [coinData, setCoinData] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [value, setValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<CoinOption | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState<Error | null>(null);

  const dispatch = useAppDispatch();

  const portfolio = useAppSelector((state) => state.portfolio.portfolio);

  const handleInvestmentAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInvestmentAmount(value);
  };

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDate(value);
  };

  const handleSave = async () => {
    const coinData = await fetchData();
    const { market_data } = coinData;
    const item: Portfolio = {
      name: value,
      amountBought: parseFloat(investmentAmount),
      date: date,
      market_data,
    };

    dispatch(addCoin(item));
    setDate("");
    setValue("");
    setInvestmentAmount("");
  };

  const handleModal = () => {
    setShowModal(false);
  };

  // console.log("sel;ected", selectedOption);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data =
  //       await fetch(`https://api.coingecko.com/api/v3/coins/${selectedOption}
  //     `);

  //     const coinData = data.json();
  //     console.log("coin data for coin", coinData);
  //     setCoinData(coinData);
  //   };
  //   fetchData();
  // }, [selectedOption]);

  return (
    <>
      <div className="relative mx-auto ">
        <div className="absolute inset-0 bg-gray-200 bg-opacity-60  backdrop-blur-xs z-0  "></div>

        <div className="bg-red-500  bg-opacity-90  inset-x-0   w-1/2  py-7 absolute translate-x-1/5  mt-5 z-50 mx-auto ">
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
                    src={`${selectedOption.image?.large}`}
                    alt=""
                  />
                )}
                <p className="coin-name mt-4">Your coin</p>
              </div>
            </div>

            <div className="w-60 flex flex-col px-0 py-2 box-border mt-5  mb-2 h-[300px] justify-between  ">
              <SearchableDropdown
                setSelectedOption={setSelectedOption}
                options={allCoins}
                label="name"
                id="id"
                selectedVal={value}
                handleChange={(val: string) => setValue(val)}
              />

              <input
                onChange={(e) => handleInvestmentAmount(e)}
                className="w-42"
                placeholder="Purchased Amount"
                type="text"
                value={investmentAmount}
              />
              <input
                onChange={(e) => handleDate(e)}
                className="w-42"
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
    </>
  );
};

export default AddCoinModal;
