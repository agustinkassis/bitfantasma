import * as React from 'react';
import { useTicker } from '../libs/binance';
import getQuote from '../libs/bluelytics';

type ContextState = { btcArs: number; btcUsd: number; usdArs: number };

const RateContext = React.createContext<ContextState>({
  btcArs: 0,
  btcUsd: 0,
  usdArs: 0,
});

const RateContextProvider: React.FC = ({ children }) => {
  const [usdArs, setUsdArs] = React.useState<number>(0);
  const { price: btcUsd } = useTicker();

  const btcArs = btcUsd * usdArs;

  const value = { btcArs, btcUsd, usdArs };

  React.useEffect(() => {
    async function getUsdArs() {
      setUsdArs(await getQuote());
    }
    getUsdArs();
  }, []);

  return <RateContext.Provider value={value}>{children}</RateContext.Provider>;
};

export { RateContext, RateContextProvider };
