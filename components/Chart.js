import React from 'react';
import {Dimensions, View} from 'react-native';
import {ChartDot, ChartPath, ChartPathProvider, ChartXLabel,ChartYLabel,monotoneCubicInterpolation} from '@rainbow-me/animated-charts';
import { exp } from 'react-native-reanimated';

export const {width: SIZE} = Dimensions.get('window');

const Chart = ({containerStyle,chartPrices}) => (
  <View style={{ backgroundColor: 'black' }}>
    <ChartPathProvider data={{ points, smoothingStrategy: 'bezier' }}>
      <ChartPath height={SIZE / 2} stroke="yellow" width={SIZE} />
      <ChartDot style={{ backgroundColor: 'blue' }} />
    </ChartPathProvider>
  </View>
);

export {Chart};