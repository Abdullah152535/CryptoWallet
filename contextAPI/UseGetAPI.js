

import axios from "axios";
import React, { useState, useEffect } from 'react';

const UseGetAPI = (url) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
      axios.get(url)
        .then(function (response) {
            setData(response.data)
            console.log('response',response.data.length);
          })
        .catch(function (error) {
            console.log(error);
        })
    },[])

  return {data}
}

export {UseGetAPI};