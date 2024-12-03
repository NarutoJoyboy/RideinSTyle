import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CustomButton({...props}) {
  return (
    <TouchableOpacity
      style={props.buttonStyle}
      onPress={props.onPress}
      activeOpacity={0.7}
    >
        <Text style={props.textStyle}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
}
