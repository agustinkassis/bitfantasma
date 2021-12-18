import useSWR from 'swr';
import fetcher from './fetcher';

const serviceUrl = 'https://www.binance.com/api/v1/ticker/price?symbol=BTCUSDT';

function getQuote() {
  return fetch(serviceUrl)
    .then((response) => response.json())
    .then((data) => {
      return parseFloat(data.price);
    });
}

function useTicker() {
  const { data, error } = useSWR(serviceUrl, fetcher);

  return {
    symbol: data?.symbol,
    price: parseInt(data?.price),
    isLoading: !error && !data,
    isError: error,
  };
}

export { useTicker };

export default getQuote;
