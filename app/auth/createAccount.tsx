import { View, StyleSheet, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import CustomText from "@/components/CustomText";
import CustomView from "@/components/customView";
import GradientView from "@/components/gradientView";
import CustomTxtInput from "@/components/customTxtInput";
import Style from "@/components/colors";
import GradientButton from "@/components/gradientButton";
import CustomIcons from "@/components/Icons";
import CustomButton from "@/components/customButton";

const { width, height } = Dimensions.get("window");

export default function CreateAccount() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const TimeOut = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(TimeOut);
  }, []);

  const NameFields = ({ ...props }) => {
    return (
      <CustomView style={styles.Box1}>
        <CustomText helperText={props.title} textStyle={styles.nameText} />
        <CustomTxtInput
          placeholder={props.title}
          placeholderTextColor="#d0cccc"
          style={styles.txtInput}
        />
      </CustomView>
    );
  };

  const AutoLogin = ({ name, type }) => {
    return (
      <GradientButton
        Style={styles.iconBox}
        gradStyle={styles.autoLoginGradStyle}
      >
        <CustomIcons name={name} type={type} color={"white"} size={27} />
      </GradientButton>
    );
  };

  return loading ? (
    <Loading />
  ) : (
    <GradientView colors={["#1B182E", "#000000"]} style={styles.container}>
      <CustomView style={styles.fieldBox}>
        <CustomText helperText="Create Account" textStyle={styles.headerText} />
        <CustomView style={styles.nameBox}>
          <NameFields title={"First Name"} />
          <NameFields title={"Last Name"} />
        </CustomView>
        <CustomView style={styles.boxes}>
          <CustomText helperText="Phone Number" textStyle={styles.nameText} />
          <CustomTxtInput
            placeholder="Phone number"
            placeholderTextColor= {Style.colors.borderColor}
            style={styles.txtInput}
            keyboardType="phone-pad"
          />
        </CustomView>
        <CustomView>
          <CustomText helperText="Date of Birth" textStyle={styles.nameText} />
          <CustomView style={styles.rowContainer}>
            <CustomTxtInput
              placeholder="Date of Birth"
              placeholderTextColor= {Style.colors.borderColor}
              style={styles.txtInput}
              keyboardType="phone-pad"
            />
          </CustomView>
        </CustomView>
      </CustomView>
      <GradientButton
        gradStyle={styles.signupButtonGrad}
        textStyle={styles.createText}
      >
        <CustomText helperText="Create Account" textStyle={styles.createText} />
      </GradientButton>
      <CustomView style={styles.elseBox}>
        <View style={styles.lineDivide} />
        <CustomText helperText="Or use" textStyle={styles.elseText} />
        <View style={styles.lineDivide} />
      </CustomView>
      <CustomView style={styles.socialLoginContainer}>
        <AutoLogin name={"apple"} type={"FontAwesome"} />
        <AutoLogin name={"google"} type={"FontAwesome"} />
        <AutoLogin name={"facebook"} type={"FontAwesome"} />
      </CustomView>
      <CustomButton buttonText={'Sign in'} textStyle={{color:'white', fontSize:22, margin:20}}   />
    </GradientView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  nameBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 20,
  },
  headerText: {
    color: "white",
    fontSize: 26,
    marginVertical: 30,
  },
  txtInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#7a7878",
    color: "white",
  },
  nameText: {
    fontSize: 20,
    color: Style.colors.text,
    marginVertical: 10,
  },
  Box1: {
    width: "45%",
  },
  fieldBox: {
    // Kept as comment to match original
    // width: "90%",
    // marginVertical: 20
  },
  boxes: {
    marginVertical: 20,
  },
  signupButtonGrad: {
    width: "90%",
    height: height / 15,
    marginVertical: 30,
    borderRadius: 15,
    justifyContent: "center",
  },
  signupButton: {
    padding: 15,
    borderRadius: 25,
    width: 200,
  },
  createText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  elseBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  lineDivide: {
    height: 1,
    backgroundColor: "#7a7878",
    width: "35%",
    margin: 10,
  },
  elseText: {
    color: Style.colors.borderColor,
    fontSize: 17,
  },
  iconBox: {
    padding: 20,
    backgroundColor: "#0f081a",
    margin: 1,
    borderRadius: 15,
    width: 78,
    height: 78,
    justifyContent: "center",
    alignItems: "center",
  },
  // New styles to replace inline styles
  rowContainer: {
    // flexDirection: "row"
  },
  socialLoginContainer: {
    flexDirection: "row",
    borderBlockColor:'white',
  },
  autoLoginGradStyle: {
    borderRadius: 15,
    width: "22.3%",
    height: 80,
    justifyContent: "center",
    margin: 15,
  },
});
