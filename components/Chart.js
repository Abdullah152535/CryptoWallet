import React from 'react';
import { View } from 'react-native';
import { color } from 'react-native-reanimated';
import {  VictoryLine,VictoryChart,VictoryAxis } from "victory-native";

const Chart = ({containerStyle,chartPrices}) => {
  return(
    

    <>
      <VictoryLine
    style={{
      data:{
        stroke:"green",
        strokeWidth:2
      },
      color:"red",
      
    }} 
    width={500}
    height={200}
    
      data={chartPrices}
    />
    </>


  );
}

export {Chart};