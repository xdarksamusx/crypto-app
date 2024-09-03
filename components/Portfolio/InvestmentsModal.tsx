import CloseCircle from "./Closemark";
import { useState, useEffect } from "react";
import SearchableDropdown from "./SearchableDropDown";
import { addCoin, deleteCoin } from "../../redux/features/portfolioSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { previousDate, currentDate } from "@utils/dateFunctions";

const InvestmentsCalculator = ({
  showInvestments,
  setShowInvestments,
  allCoins,
}) => {
  let valueTotal, fundsTotal;
  const [isClient, setIsClient] = useState(false);
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [initialInvestment, setInitialInvestment] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [recentDate, setRecentDate] = useState("");
  const [prevDate, setPrevDate] = useState("");
  const [growRate, setGrowRate] = useState("");
  const [fundsRate, setFundsRate] = useState("");

  const [error, setError] = useState<Error | null>(null);
  const [selectedButton, setSelectedButton] = useState("valueCostAveraging");

  const coinValue = selectedOption?.market_data?.current_price?.usd;

  //   useEffect(() => {
  //     fundingTotal = 0;
  //     valueTotal = 0;
  //   }, [selectedButton]);

  const handleModal = () => {
    setShowInvestments(false);
  };

  const handleRecentDateInput = (e) => {
    const value = e.target.value;
    setRecentDate(value);
  };

  const handlePreviousDateInput = (e) => {
    const value = e.target.value;
    setPrevDate(value);
  };

  const handleContribution = (e) => {
    const value = e.target.value;

    setNumberOfDays(value);
  };

  const handleInitialInvestmentInput = (e) => {
    const value = e.target.value;
    setInitialInvestment(value);
  };

  const handleGrowRateInput = (e) => {
    const value = e.target.value;
    setGrowRate(value);
  };

  const handleFundsRateInput = (e) => {
    const value = e.target.value;
    setFundsRate(value);
  };

  const handleValueCalculation = () => {
    setNumberOfDays("");

    setGrowRate("");
    setFundsRate("");
    setInitialInvestment("");
    setPrevDate("");
    setRecentDate("");
    setValue("");
  };

  const handleDollarValueCalculation = () => {
    setNumberOfDays("");
    setGrowRate("");
    setFundsRate("");
    setInitialInvestment("");
    setPrevDate("");
    setRecentDate("");
    setValue("");
  };

  if (selectedButton === "valueCostAveraging") {
    valueTotal =
      Number(initialInvestment) + Number(growRate) * Number(numberOfDays);
  } else {
    fundsTotal =
      Number(initialInvestment) + Number(fundsRate) * Number(numberOfDays);
  }

  return (
    <>
      <div className="flex flex-col justify-evenly w-5/6 h-[500px] bg-green-500  px-12 py-2 mx-auto ">
        {/* <div className="fixed inset-0 bg-gray-200 bg-opacity-60  backdrop-blur-xs z-0"></div> */}

        <div className=" flex justify-between">
          <h4>Investments Calculator</h4>
          <CloseCircle handleModal={handleModal} />
        </div>
        <div className="flex justify-between">
          <div className="your coin">Your coin (ABC)</div>
          <SearchableDropdown
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
            options={allCoins}
            label="name"
            id="id"
            selectedVal={value}
            handleChange={(val) => setValue(val)}
          />
        </div>

        <div className="flex justify-between">
          <div className="bg-red-300  px-2 h-15 justify-center items-center flex">
            chart icon
          </div>
          <div className="bg-red-300 px-2 h-15 justify-center items-center flex">
            {" "}
            <input
              onChange={(e) => handlePreviousDateInput(e)}
              value={prevDate}
              className=" bg-transparent py-2 outline-none"
              type="datetime-local"
            />
          </div>
          <div className="bg-red-300 px-2 h-15 justify-center items-center flex">
            {" "}
            <input
              onChange={(e) => handleRecentDateInput(e)}
              value={recentDate}
              className="  bg-transparent py-2 outline-none"
              type="datetime-local"
            />
          </div>
          <div className="bg-red-300 px-2 h-15 justify-center items-center flex">
            chart icon
          </div>
        </div>

        <div className="w-full ">
          <button
            onClick={() => setSelectedButton("valueCostAveraging")}
            className={`px-3 py-1 w-1/2 ${
              selectedButton === "valueCostAveraging"
                ? "bg-violet-300"
                : "bg-red-300"
            } `}
          >
            Value cost averaging
          </button>
          <button
            onClick={() => setSelectedButton("dollarCostAveraging")}
            className={`px-3 py-1 w-1/2 ${
              selectedButton === "dollarCostAveraging"
                ? "bg-violet-300"
                : "bg-red-300"
            } `}
          >
            Dollar cost averaging
          </button>
        </div>

        <ul className="w-full">
          <li className="flex justify-between">
            <div>
              {" "}
              Contribution interval, days <span>?</span>
            </div>{" "}
            <input
              onChange={(e) => handleContribution(e)}
              value={numberOfDays}
              className="border-2
            "
              type="text"
            />
          </li>
          <li className="flex justify-between">
            <div>
              {" "}
              Initial Investment, $ <span>?</span>
            </div>{" "}
            <input
              onChange={(e) => {
                handleInitialInvestmentInput(e);
              }}
              value={initialInvestment}
              className="border-2
            "
              type="text"
            />
          </li>
          {selectedButton === "valueCostAveraging" ? (
            <li className="flex justify-between">
              <div>
                {" "}
                Grow rate per interval, % <span>?</span>
              </div>{" "}
              <input
                onChange={(e) => handleGrowRateInput(e)}
                value={growRate}
                className="border-2
            "
                type="text"
              />
            </li>
          ) : (
            <li className="flex justify-between">
              <div>
                {" "}
                Funds added per interval, % <span>?</span>
              </div>{" "}
              <input
                onChange={(e) => handleFundsRateInput(e)}
                value={fundsRate}
                className="border-2
                
            "
                type="text"
              />
            </li>
          )}

          <li className="flex justify-between">
            <div>
              Total amount spent oi investments <span>?</span>
            </div>{" "}
            <div>
              {selectedButton === "valueCostAveraging" ? (
                <span> $ {valueTotal}</span>
              ) : (
                <span> $ {fundsTotal}</span>
              )}
            </div>
          </li>
          <li className="flex justify-between">
            <div className="flex justify-between">
              {" "}
              Coins value, <span>?</span>
            </div>{" "}
            <div
              className=" 
            "
            />
            <span> $ {value ? coinValue : "0"} </span>
          </li>
        </ul>

        {selectedButton === "valueCostAveraging" ? (
          <div
            onClick={() => handleValueCalculation()}
            className="flex items-center justify-center py-1 bg-red-300"
          >
            Calculate New (VCA)
          </div>
        ) : (
          <div
            onClick={() => handleDollarValueCalculation()}
            className="flex items-center justify-center py-1 bg-red-300"
          >
            Calculate New (FCA)
          </div>
        )}

        <div>
          {selectedButton === "valueCostAveraging" ? (
            <p>
              Value-cost averaging (VCA) -- is an investment strategy focuses on
              the value of the investment rather than the number of coins
              purchased. In VCA, investors aim to invest a consistent amount of
              money at regular intervals, but instead of buying a fixed quantity
              of assets each time.
            </p>
          ) : (
            <p>
              Dollar-cost averaging (DCA) -- is to reduce the impact of market
              volatility on the average cost of acquiring the investment. By
              consistently investing over time, investors may be able to lower
              their average cost per coin and potentially benefit from long-term
              market appreciation
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default InvestmentsCalculator;
