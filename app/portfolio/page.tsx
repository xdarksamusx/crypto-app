"use client";
import React, { useEffect } from "react";
import CoinCard from "@components/Portfolio/CoinCard";
import InvestmentsCalculator from "@components/Portfolio/InvestmentsModal";
import AddCoinModal from "@components/Portfolio/AddCoinModal";
import { createPortal } from "react-dom";
import { useState } from "react";
import SearchableDropdown from "@components/Portfolio/SearchableDropDown";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import axios from "axios";
export default function Portfolio() {
  const [isClient, setIsClient] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showInvestments, setShowInvestments] = useState(false);
  const [value, setValue] = useState("");

  const [allCoins, setAllCoins] = useState(null);

  const portfolio = useAppSelector((state) => state.portfolio.portfolio);

  useEffect(() => {}, [portfolio]);

  useEffect(() => {
    setIsClient(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/list"
        );
        setAllCoins(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className=" flex justify-around relative">
        {" "}
        <p>Your statistics</p>
        <div className=" flex gap-3">
          <button className="px-4 py-1 bg-blue-400">Greed & Fear Index</button>
          <button
            className="px-4 py-1 bg-blue-400 "
            onClick={() => {
              setShowModal(false);
              setShowInvestments(true);
            }}
          >
            Investments Calculator
          </button>
          <button
            className="px-4 py-1 bg-blue-400 "
            onClick={() => {
              setShowInvestments(false);
              setShowModal(true);
            }}
          >
            Add Asset
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center"></div>

      {showModal &&
        !showInvestments &&
        createPortal(
          <AddCoinModal
            showModal={showModal}
            setShowModal={setShowModal}
            showInvestments={showInvestments}
            setShowInvestments={setShowInvestments}
            allCoins={allCoins}
          />,
          document.body
        )}

      {portfolio.length > 0 &&
        portfolio.map((coin, index) => {
          return <CoinCard key={index} coin={coin} />;
        })}

      {showInvestments &&
        !showModal &&
        createPortal(
          <InvestmentsCalculator
            showInvestments={showInvestments}
            setShowInvestments={setShowInvestments}
            showModal={showModal}
            setShowModal={setShowModal}
            allCoins={allCoins}
          />,
          document.body
        )}
    </>
  );
}
