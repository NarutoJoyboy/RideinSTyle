import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import CustomText from "@/components/CustomText";
import CustomView from "@/components/customView";
import GradientView from "@/components/gradientView";
import CustomTxtInput from "@/components/customTxtInput";

export default function CreateAccount() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const TimeOut = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(TimeOut);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <GradientView
      colors={["#36305C", "#19162E"]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <CustomView>
        <CustomText helperText="Create Account" textStyle={styles.createTxt} />
        <CustomView>
          <CustomView>
            <CustomText helperText="First Name" textStyle={styles.createTxt} />
            <CustomTxtInput
              placeholder="First Name"
              placeholderTextColor="white"
            />
          </CustomView>
          <CustomView>
            <CustomText helperText="Last Name" textStyle={styles.createTxt} />
            <CustomTxtInput
              placeholder="Last Name"
              placeholderTextColor="white"
              style={styles.txtInput}
            />
          </CustomView>
        </CustomView>
        <CustomView></CustomView>
      </CustomView>
    </GradientView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  createTxt: {
    color: "white",
    fontSize: 22,
  },
  txtInput: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    color: "white",
  },
});
