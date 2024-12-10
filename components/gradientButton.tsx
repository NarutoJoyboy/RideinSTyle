import { TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function GradientButton({ ...props }) {
  return (
    <LinearGradient
      colors={["#FF8101", "#FF1E5E", "#6720FF"]}
      end={[1, 1]}
      start={[0, 0]}
      style={props.gradStyle}
    >
      <TouchableOpacity onPress={props.onPress} style={props.Style}>
        {props.children}
      </TouchableOpacity>
    </LinearGradient>
  );
}
