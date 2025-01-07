import React, { useState, useEffect } from "react";
import { 
  View, 
  StyleSheet, 
  Dimensions, 
  KeyboardAvoidingView, 
  Platform, 
  Alert 
} from "react-native";
import { useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";

// Import custom components
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
  // State Management
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: ''
  });

  // Routing
  const router = useRouter();

  // Loading Effect
  useEffect(() => {
    const TimeOut = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(TimeOut);
  }, []);

  // Validation Functions
  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^[0-9]{10}$/; // 10-digit phone number
    return phoneRegex.test(number);
  };

  const validateAge = (selectedDate: Date) => {
    const currentDate = new Date();
    const minAgeDate = new Date(
      currentDate.getFullYear() - 18, 
      currentDate.getMonth(), 
      currentDate.getDate()
    );
    return selectedDate <= minAgeDate;
  };

  // Form Submission Handler
  const handleCreateAccount = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate First Name
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
      valid = false;
    } else {
      newErrors.firstName = ' ';
    }

    // Validate Last Name
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    } else {
      newErrors.lastName = '';
    }

    // Validate Phone Number
    if (!validatePhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
      valid = false;
    } else {
      newErrors.phoneNumber = '';
    }

    // Validate Date of Birth
    if (!date || !validateAge(date)) {
      newErrors.dateOfBirth = 'You must be at least 18 years old';
      valid = false;
    } else {
      newErrors.dateOfBirth = '';
    }

    // Update errors
    setErrors(newErrors);

    // If all validations pass
    if (valid) {
      // Proceed with account creation
      Alert.alert('Success', 'Account creation logic would go here');
      // TODO: Implement actual account creation logic
    }
  };

  // Reusable Name Input Component
  const NameFields = ({ 
    title, 
    value, 
    onChangeText, 
    error 
  }: { 
    title: string, 
    value: string, 
    onChangeText: (text: string) => void,
    error?: string 
  }) => {
    return (
      <CustomView style={styles.Box1}>
        <CustomText helperText={title} textStyle={styles.nameText} />
        <CustomTxtInput
          placeholder={title}
          placeholderTextColor="#d0cccc"
          style={[
            styles.txtInput, 
            error ? styles.errorInput : {}
          ]}
          value={value}
          onChangeText={onChangeText}
          accessibilityLabel={title}
        />
        {error && (
          <CustomText 
            helperText={error} 
            textStyle={styles.errorText} 
          />
        )}
      </CustomView>
    );
  };

  // Social Login Component
  const AutoLogin = ({ name, type }: { name: string; type: string }) => {
    const handleSocialLogin = () => {
      // TODO: Implement social login logic
      Alert.alert('Social Login', `Logging in with ${name}`);
    };

    return (
      <GradientButton
        Style={styles.iconBox}
        gradStyle={styles.autoLoginGradStyle}
        onPress={handleSocialLogin}
      >
        <CustomIcons name={name} type={type} color={"white"} size={27} />
      </GradientButton>
    );
  };

  // Render Loading if needed
  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <GradientView colors={["#1B182E", "#000000"]} style={styles.container}>
        <CustomView style={styles.fieldBox}>
          <CustomText helperText="Create Account" textStyle={styles.headerText} />
          
          <CustomView style={styles.nameBox}>
            <NameFields 
              title={"First Name"} 
              value={firstName}
              onChangeText={setFirstName}
              error={errors.firstName}
            />
            <NameFields 
              title={"Last Name"} 
              value={lastName}
              onChangeText={setLastName}
              error={errors.lastName}
            />
          </CustomView>

          <CustomView style={styles.boxes}>
            <CustomText helperText="Phone Number" textStyle={styles.nameText} />
            <CustomTxtInput
              placeholder="Phone number"
              placeholderTextColor={Style.colors.borderColor}
              style={[
                styles.txtInput, 
                errors.phoneNumber ? styles.errorInput : {}
              ]}
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              maxLength={10}
            />
            {errors.phoneNumber && (
              <CustomText 
                helperText={errors.phoneNumber} 
                textStyle={styles.errorText} 
              />
            )}
          </CustomView>

          <CustomView>
            <CustomText helperText="Date of Birth" textStyle={styles.nameText} />
            <CustomView style={styles.txtInput}>
              <CustomText
                helperText={date ? date.toDateString() : "Date of Birth"}
                textStyle={[
                  { 
                    color: date ? "white" : Style.colors.borderColor, 
                    paddingVertical: 10 
                  },
                ]}
                onPress={() => setShowPicker(!showPicker)}
              />
              {showPicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date || new Date()}
                  mode="date"
                  display="default"
                  minimumDate={new Date(1900, 0, 1)}
                  maximumDate={new Date()}
                  onChange={(event, selectedDate) => {
                    setDate(selectedDate);
                    setShowPicker(false);
                  }}
                />
              )}
            </CustomView>
            {errors.dateOfBirth && (
              <CustomText 
                helperText={errors.dateOfBirth} 
                textStyle={styles.errorText} 
              />
            )}
          </CustomView>
        </CustomView>

        <GradientButton 
          gradStyle={styles.signupButtonGrad}
          onPress={handleCreateAccount}
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

        <CustomView style={styles.signInContainer}>
          <CustomText
            helperText="Already have an account?"
            textStyle={styles.signInText}
          />
          <CustomButton
            buttonText={"Sign in"}
            textStyle={styles.signInButtonText}
            onPress={() => router.replace("/auth/signIn")}
          />
        </CustomView>
      </GradientView>
    </KeyboardAvoidingView>
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
    fontSize: 28,
    marginTop: 30,
    marginBottom: 20,
  },
  txtInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#7a7878",
    color: "white",
    fontSize: 15,
  },
  errorInput: {
    borderBottomColor: 'red',
  },
  errorText: {
    color: 'red', 
    fontSize: 12,
    marginTop: 5,
  },
  nameText: {
    fontSize: 18,
    color: Style.colors.text,
    marginTop: 5,
  },
  Box1: {
    width: "45%",
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
  createText: {
    fontSize: 22,
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
    fontSize: 14,
  },
  iconBox: {
    backgroundColor: "#0f081a",
    borderRadius: 15,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  socialLoginContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  autoLoginGradStyle: {
    borderRadius: 15,
    width: 72,
    height: 72,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  signInContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    marginVertical: 20,
  },
  signInText: {
    color: Style.colors.text, 
    fontSize: 16,
  },
  signInButtonText: {
    color: Style.colors.buttonColor,
    fontSize: 16,
    marginLeft: 5,
  },
});