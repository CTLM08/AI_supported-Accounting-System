import React, { useEffect, useState } from "react";

const Stock = () => {
  const [loading, SetLoading] = useState(false);
  const [stocks, setStocks] = useState([]);
  const loadStock = async () => {
    SetLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/stocks");
      const data = await res.json();
      if (data.error) setError(data.error);
      else setStocks(data);
    } catch {
      console.log("Failed to fetch data");
    }
    SetLoading(false);
  };
  useEffect(() => {
    loadStock();
  }, []);
  return (
    <div className="w-full h-full p-3">
      <>
        {loading ? (
          <p>loading</p>
        ) : (
          <div className="flex flex-col gap-3 w-full">
            {stocks.map((stock) => (
              <div
                key={stock["01. symbol"]}
                className="flex flex-row w-full items-center justify-between"
              >
                <div>
                  <h1 className="font-semibold">{stock["01. symbol"]}</h1>
                </div>
                <td className="text-black/70 font-bold">
                  ${parseFloat(stock["05. price"]).toFixed(2)}
                </td>
                <td
                  className={`font-semibold ${
                    stock["09. change"] > 0
                      ? "text-[#4BC0C0]"
                      : stock["09. change"] < 0
                      ? "text-[#FF6384]"
                      : "text-black/70"
                  }`}
                >
                  {parseFloat(stock["09. change"]).toFixed(2)}
                </td>
                <td
                  className={`font-semibold ${
                    stock["10. change percent"] > 0
                      ? "text-[#4BC0C0]"
                      : stock["10. change percent"] < 0
                      ? "text-[#FF6384]"
                      : "text-black/70"
                  }`}
                >
                  {stock["10. change percent"]}
                </td>
              </div>
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default Stock;
