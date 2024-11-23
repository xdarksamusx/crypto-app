"use client";
import React, { useEffect } from "react";
import CoinCard from "@components/Portfolio/CoinCard";
import InvestmentsCalculator from "@components/Portfolio/InvestmentsModal";
import AddCoinModal from "@components/Portfolio/AddCoinModal";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import axios from "axios";
export default function Portfolio() {
  const [isClient, setIsClient] = useState<Boolean>(false);
  const [showModal, setShowModal] = useState<Boolean>(false);
  const [showInvestments, setShowInvestments] = useState<Boolean>(false);
  const [value, setValue] = useState<string>("");

  const [allCoins, setAllCoins] = useState<any>(null);

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
      <div className=" flex justify-around relative z-10">
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

      <div className="z-40">
        {showModal && !showInvestments && (
          <AddCoinModal setShowModal={setShowModal} allCoins={allCoins} />
        )}
      </div>

      <div className="z-40">
        {showInvestments && !showModal && (
          <InvestmentsCalculator
            setShowInvestments={setShowInvestments}
            allCoins={allCoins}
          />
        )}
      </div>

      {portfolio.length > 0 &&
        portfolio.map((coin, index) => {
          return <CoinCard key={coin.name} coin={coin} />;
        })}
    </>
  );
}
