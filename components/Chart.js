import React from 'react';
import { color } from 'react-native-reanimated';
import {  VictoryLine,VictoryChart } from "victory-native";

const Chart = ({containerStyle,chartPrices}) => {
  return(

    <VictoryLine
    style={{
      data:{
        stroke:"white",
        strokeWidth:2
      },
      color:"red",
      
    }} 
    width={500}
    height={200}
    
      data={chartPrices}
    />
  
  
  );
}

export {Chart};