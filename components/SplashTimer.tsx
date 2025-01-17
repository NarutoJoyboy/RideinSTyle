import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "@/components/gradientText";
import GradientLoading from "@/components/gradient_loading";
import CustomText from "./CustomText";
import GradientView from "./gradientView";

export default function SplashTimer() {
  return (
    <GradientView
      colors={["#36305C", "#19162E", "#000000"]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ alignItems: "center", marginBottom: 60 }}>
        <Image
          source={require("../assets/images/RideLogo.png")}
          style={{ width: 100, height: 100 }}
        />
        <GradientText />
        <CustomText
          helperText={"RIDE IN STYLE"}
          textStyle={styles.text}
          type={true}
        />
      </View>
      <GradientLoading />
    </GradientView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "white",
    letterSpacing: 2,
  },
});
