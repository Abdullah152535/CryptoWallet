import CoinGeckoContext from './context';
import axios from 'axios';
import { UseGetAPI } from './UseGetAPI';
import React, { useState, useEffect ,useCallback} from 'react';


const CoinGeckoProvider = ({ children }) => {

  const [cryptoData, setCryptoData] = useState([]);

  const fetchData = async () => {
    try {
      const cryptoResponse = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=7d&locale=en'
      );
      
      const cryptoData = cryptoResponse.data;
  
      setCryptoData(cryptoData);
      // console.log(cryptoData)
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    const interval = setInterval(() => {
      fetchData();
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  

  return (
    <CoinGeckoContext.Provider
      value={ cryptoData }
    >
      {/* {cryptoData.length>0? console.log(cryptoData): console.log()} */}
      {children}
    </CoinGeckoContext.Provider>
  );
};

export default CoinGeckoProvider;