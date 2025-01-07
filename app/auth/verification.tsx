import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import GradientView from "@/components/gradientView";
import CustomView from "@/components/customView";
import CustomText from "@/components/CustomText";
import CustomButton from "@/components/customButton";
import CustomIcons from "@/components/Icons";
import Style from "@/components/colors";
import { router } from "expo-router";
import CustomTxtInput from "@/components/customTxtInput";
import GradientButton from "@/components/gradientButton";

const { height } = Dimensions.get("window");
export default function Verification() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const VerificationCode = () => {
    return (
      <CustomView style={styles.otpStyle}>
        {otp.map((data, index) => {
          return (
            <CustomTxtInput
              keyboardType="number-pad"
              maxLength={1}
              style={{
                width: 50,
                height: 50,
                borderRadius: 10,
                color: "white",
                fontSize: 20,
                textAlign: "center",
                margin: 10,
                borderBottomWidth: 1,
                borderBottomColor: Style.colors.text,
              }}
              value={data}
              onChangeText={(text) => {
                let otpCopy = [...otp];
                otpCopy[index] = text;
                setOtp(otpCopy);
              }}
              key={index}
            />
          );
        })}
      </CustomView>
    );
  };
console.log(".......................", otp.map((data, index) => {
  return data;
}));

  return (
    <GradientView colors={["#1B182E", "#000000"]} style={styles.container}>
      <CustomView>
        <CustomText helperText="Verification" textStyle={styles.headerText} />
        <CustomText
          helperText={"Enter the verification code sent to  "}
          textStyle={styles.subheaderText}
        />
        <CustomView style={styles.description}>
          <CustomText
            helperText={"+1 9898989898"}
            textStyle={styles.subheaderText}
          />
          <CustomIcons
            name="edit"
            type="AntDesign"
            color={Style.colors.buttonColor}
            size={20}
            onPress={() => router.back()}
          />
        </CustomView>
      </CustomView>
      <VerificationCode />
      <GradientButton
        gradStyle={styles.signupButtonGrad}
        onPress={() => router.navigate("/auth/verification")}
      >
        <CustomText helperText="Verify" textStyle={styles.createText} />
      </GradientButton>
    </GradientView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 26,
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    // flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    // alignSelf: "center",
    alignContent: "center",
  },
  subheaderText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    // marginTop: 20,
    // marginHorizontal:30
  },
  otpStyle: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupButtonGrad: {
    width: "100%",
    height: height / 15,
    marginVertical: 30,
    borderRadius: 15,
    justifyContent: "center",
  },
  createText: {
    fontSize: 22,
    color: Style.colors.text,
    textAlign: "center",
  },
});
