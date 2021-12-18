import React, { useEffect } from 'react';
import './App.css';
// import getBlueQuote from './libs/bluelytics';
// import getBinanceQuote from './libs/binance';
// import TopBar from './components/TopBar';
import { Logo } from './components/Logo';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { TweetsList } from './components/TweetsList';
import { RateContextProvider } from './contexts/RateContext';

function App() {
  // const buyPrice = 1000;
  // const btcAmount = 0.00009186;
  // const [USDARS, setUSDARS] = useState(0);
  // const [BTCUSD, setBTCUSD] = useState(0);

  useEffect(() => {
    // getBlueQuote().then(setUSDARS);
    // getBinanceQuote().then(setBTCUSD);
  }, []);

  return (
    <div className='App'>
      <RateContextProvider>
        {/* <TopBar /> */}
        <Logo />
        <Body>
          <TweetsList />
        </Body>
        <Footer />
      </RateContextProvider>
    </div>
  );
}

export default App;
