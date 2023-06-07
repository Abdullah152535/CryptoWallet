
import CoinGeckoContext from './context';
// import axios from 'axios';
import { UseGetAPI } from './UseGetAPI';
import React, { useState, useEffect } from 'react';


const CoinGeckoProvider = ({ children }) => {

  const [cryptoData, setCryptoData] = useState([]);

  const {data} = UseGetAPI('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1hlocale=en');
  useEffect(()=>{
    setCryptoData(data);
    // console.log(data);
  },[data])
  

  return (
    <CoinGeckoContext.Provider
      value={{
        cryptoData
      }}
    >
      {/* {cryptoData.length>0? console.log(cryptoData): console.log()} */}
      {children}
    </CoinGeckoContext.Provider>
  );
};

export default CoinGeckoProvider;
