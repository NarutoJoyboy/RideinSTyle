import { View } from "react-native";
import React from "react";
import Svg, { Text, Defs, LinearGradient, Stop } from "react-native-svg";

export default function GradientText() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Svg height="60" width="200">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="100%">
            <Stop offset="0" stopColor="#6720FF" />
            <Stop offset="0" stopColor="#FF1E5E" />
            <Stop offset="1" stopColor="#FF8101" />
          </LinearGradient>
        </Defs>
        <Text
          fill="url(#grad)" // Gradient fill
          fontSize="45"
          // fontWeight="bold"
          letterSpacing={15}
          x="35"
          y="50" // Adjust y to align vertically within the Svg
        >
          ELITE
        </Text>
      </Svg>
    </View>
  );
}
