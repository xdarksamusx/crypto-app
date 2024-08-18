import { CoinData } from "@utils/interfaces";

interface BoxProps extends CoinData {
  data: CoinData;
}

const Box: React.FC<BoxProps> = ({ data }) => {
  console.log("looking at data object", data);
  return (
    <>
      <div className="px-9 py-3 w-[650px] h-[200px]  bg-slate-300">
        <p className="mb-9 px-0 py-0 mx-0 my-0">You buy</p>

        <div className=" border-b-2 border-blue-200 flex justify-between py-2">
          <div className="flex">
            {" "}
            <span className="flex items-center justify-center">
              <img className="w-5 h-5" src={data.image} alt="" />
            </span>{" "}
            <p>
              {data.id} ({data.symbol})
            </p>{" "}
            <span className="flex items-center justify-center"></span>
          </div>
          <div className="amount"></div>amount
        </div>

        <p className="mt-5">1BTC = {data.current_price}</p>
      </div>
    </>
  );
};
export default Box;
