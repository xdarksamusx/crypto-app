import CloseCircle from "./Closemark";
import { useState, useEffect } from "react";
import SearchableDropdown from "./SearchableDropDown";

const AddCoinModal = ({ setShowModal, showModal, allCoins }) => {
  const [isClient, setIsClient] = useState(false);
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    console.log("selected option", selectedOption);
  }, [selectedOption]);

  return (
    <>
      <div className="relative">
        <div className="fixed inset-0 bg-gray-200 bg-opacity-60  backdrop-blur-xs z-0"></div>

        <div className="bg-red-500  bg-opacity-90  inset-x-0  w-[600px] py-7 absolute translate-x-2/3 translate-y-11  z-50 ">
          <div className=" px-8 flex  mb-6 justify-between">
            <p>Select Coins</p>
            <div className="close-button">
              <CloseCircle showModal={showModal} setShowModal={setShowModal} />
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

              <input className="" placeholder="Purchased Amount" type="text" />
              <input className="" placeholder="Purchased Date" type="text" />
              <div className="flex justify-between  px-0 py-0 mx-2 my-0 ">
                <button className=" px-2 py-2 rounded-md bg-yellow-300 cursor-pointer  box-border">
                  cancel
                </button>
                <button className=" px-2 py-2 rounded-md bg-yellow-300 cursor-pointer  box-border">
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
