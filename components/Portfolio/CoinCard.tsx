"use client";

interface Coin {
  id: string;
  name: string;

  data: {
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
    image: {
      small: string;
    };
  };
  amountBought?: number;
  date?: string;
}

interface CoinCardProps {
  coin: Coin | null;
}

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  if (!coin) {
    return null;
  }

  const {
    amountBought = 0,
    name = "",
    date = "",
    data: {
      image = { small: "", large: "", thumb: "" },
      market_data = {
        current_price: { usd: 0 },
        price_change_24h_in_currency: { usd: 0 },
        market_cap: { usd: 0 },
        total_volume: { usd: 0 },
        circulating_supply: 0,
        max_supply: 0,
      },
    } = {},
  } = coin;

  return (
    <div className="flex justify-center items-stretch h-[350px] border-2 border-black w-11/12">
      <div className="flex items-center flex-col justify-center w-1/4">
        <div className="image">
          {image?.small ? (
            <img className="w-[100px] h-[100px]" src={image.small} alt={name} />
          ) : (
            <p>No Image Available</p>
          )}
        </div>
        <p>{name ? `${name.toUpperCase()} (BTC)` : "No Name Available"}</p>
      </div>
      <div className="flex flex-col justify-around w-3/4">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p>Market Price</p>
          </div>
          <div className="flex justify-start flex-column text-xs ">
            <div className="current-price w-1/4">
              <div className="w-32">Current price</div>
              <p className="w-32 text-center pr-16  ">
                {market_data?.current_price
                  ? market_data?.current_price?.usd
                  : "N/A"}
              </p>
            </div>
            <div className="w-1/4 ">
              <div className="w-32 text-center">Price range 24h</div>
              <p className="w-32 text-center">
                {market_data?.price_change_24h_in_currency
                  ? market_data?.price_change_24h_in_currency?.usd
                  : "N/A"}
              </p>
            </div>
            <div className="market-cap-volume w-1/4">
              <div className="w-32">Market Cap vs Volume</div>
              <p className=" w-32 text-center">
                {market_data?.market_cap && market_data?.total_volume
                  ? (
                      market_data?.market_cap.usd /
                      market_data?.total_volume?.usd
                    ).toFixed(2)
                  : "N/A"}
              </p>
            </div>
            <div className="circulating-supply w-1/4">
              <div className="w-32">Cir vs Max Supply</div>
              <p className="text-center w-32">
                {market_data?.circulating_supply && market_data?.max_supply
                  ? (
                      market_data?.circulating_supply / market_data?.max_supply
                    ).toFixed(2)
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
        <div className="your-coin">
          <div>Your coin</div>
          <div className="flex justify-between w-full text-xs">
            <div className="coin-amount w-1/4 text-left">
              <div className=" w-32">Coin Amount</div>
              <p className="text-center w-32  pr-16 ">{amountBought}</p>
            </div>
            <div className="amount-value w-1/4">
              <div className="w-32 text-center">Amount value:</div>
              <p className="text-center w-32">
                {market_data?.current_price
                  ? (amountBought * market_data.current_price.usd).toFixed(2)
                  : "N/A"}
              </p>
            </div>
            <div className="gain-loss w-1/4">
              <div className="w-32 text-center">Gain/Loss</div>
              <p className=" w-32 text-center">
                {market_data?.price_change_24h_in_currency
                  ? market_data?.price_change_24h_in_currency.usd
                  : "N/A"}
              </p>
            </div>
            <div className="purchase-date w-1/4">
              <div className="w-32 text-center">Purchase date:</div>
              <p className=" w-32 text-center">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
