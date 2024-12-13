import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import CustomIcons from "@/components/Icons";
import GradientButton from "@/components/gradientButton";
import CustomView from "@/components/customView";
import CustomText from "@/components/CustomText";
import GradientView from "@/components/gradientView";
import Style from "@/components/colors";
import CustomTxtInput from "@/components/customTxtInput";
import CustomButton from "@/components/customButton";
import { useRouter } from "expo-router";
import { jsiConfigureProps } from "react-native-reanimated/lib/typescript/core";

const { height } = Dimensions.get("window");

export default function SignIn() {
  const router = useRouter();
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

  return (
    <GradientView colors={["#1B182E", "#000000"]} style={styles.container}>
      <CustomView style={styles.fieldBox}>
        <CustomText helperText="Sign In" textStyle={styles.headerText} />
        <CustomView style={{}}>
          <CustomText helperText={"Phone number"} textStyle={styles.nameText} />
          <CustomTxtInput
            placeholder="Phone number"
            placeholderTextColor="#d0cccc"
            style={styles.txtInput}
            keyboardType="phone-pad"
          />
        </CustomView>
        <GradientButton gradStyle={styles.signupButtonGrad}>
          <CustomText helperText="Sign In" textStyle={styles.createText} />
        </GradientButton>
      </CustomView>
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
      <CustomView
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 20,
          justifyContent: "center",
        }}
      >
        <CustomText
          helperText="Already have an account?"
          textStyle={{ color: Style.colors.text, fontSize: 20 }}
        />
        <CustomButton
          buttonText={"Sign up"}
          textStyle={{
            color: Style.colors.buttonColor,
            fontSize: 20,
            marginLeft: 5,
          }}
          onPress={() => router.push("/auth/createAccount")}
        />
      </CustomView>
    </GradientView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    paddingTop:100
  },
  headerText: {
    color: "white",
    fontSize: 26,
    marginVertical: 30,
    textAlign: "center",
  },
  fieldBox: {
    marginHorizontal: 20,
  },
  txtInput: {
    color: "white",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: Style.colors.borderColor,
    marginVertical: 10,
  },
  socialLoginContainer: {
    flexDirection: "row",
    borderBlockColor: "white",
    justifyContent: "center",
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
  autoLoginGradStyle: {
    borderRadius: 15,
    width: "22.3%",
    height: 80,
    justifyContent: "center",
    margin: 15,
  },
  elseBox: {
    flexDirection: "row",
    justifyContent: "center",
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
  nameText: {
    fontSize: 20,
    color: Style.colors.text,
    marginVertical: 10,
  },
  signupButtonGrad: {
    width: "100%",
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
    color: "white",
    fontSize: 24,
    textAlign: "center",
  },
});
