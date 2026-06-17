import { useEffect, useState } from "react";

type Coin = { symbol: string; id: string; price: number; change: number };

// Seeded so the bar always renders instantly (no layout shift); replaced by
// live CoinGecko data on mount when the fetch succeeds.
const FALLBACK: Coin[] = [
  { symbol: "BTC", id: "bitcoin", price: 98420, change: 1.82 },
  { symbol: "ETH", id: "ethereum", price: 3480, change: 2.41 },
  { symbol: "SOL", id: "solana", price: 198.3, change: -0.94 },
  { symbol: "XRP", id: "ripple", price: 2.34, change: 3.12 },
  { symbol: "BNB", id: "binancecoin", price: 642, change: 0.58 },
  { symbol: "DOGE", id: "dogecoin", price: 0.382, change: -1.41 },
  { symbol: "ADA", id: "cardano", price: 0.92, change: 1.07 },
  { symbol: "TON", id: "the-open-network", price: 5.41, change: 0.83 },
];

const fmtPrice = (n: number) =>
  n >= 1
    ? n.toLocaleString("en-US", { maximumFractionDigits: 2 })
    : n.toLocaleString("en-US", { maximumFractionDigits: 4 });

const LivePriceTicker = () => {
  const [coins, setCoins] = useState<Coin[]>(FALLBACK);

  useEffect(() => {
    const ids = FALLBACK.map((c) => c.id).join(",");
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
    )
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        setCoins(
          FALLBACK.map((c) => {
            const row = d[c.id];
            return row
              ? { ...c, price: row.usd, change: row.usd_24h_change ?? c.change }
              : c;
          })
        );
      })
      .catch(() => {
        /* keep seeded fallback */
      });
  }, []);

  const loop = [...coins, ...coins];

  return (
    <div className="mt-16 border-b border-white/[0.07] bg-white/[0.02] backdrop-blur-sm overflow-hidden">
      <div className="flex w-max infinite-scroll py-2.5">
        {loop.map((c, i) => {
          const up = c.change >= 0;
          return (
            <div
              key={i}
              className="flex items-center gap-2 px-5 whitespace-nowrap text-[13px] sm:text-sm border-r border-white/[0.06]"
            >
              <span className="font-bold text-white">{c.symbol}</span>
              <span className="font-medium text-white/45 tabular-nums">
                ${fmtPrice(c.price)}
              </span>
              <span
                className={`font-semibold tabular-nums ${
                  up ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {up ? "▲" : "▼"} {Math.abs(c.change).toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LivePriceTicker;
