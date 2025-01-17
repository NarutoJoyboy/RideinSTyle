import React, { useRef, useState, useCallback } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Custom Components
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/customButton";
import GradientView from "@/components/gradientView";
import Style from "@/components/colors";

const { width, height } = Dimensions.get("screen");

// Type Definition for Slide
interface OnboardingSlide {
  id: number;
  source: number;
  title: string;
  description: string;
}

// Slides Data
const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: 1,
    source: require("../../assets/images/splash1.png"),
    title: "ORDER A RIDE",
    description: "Order a ride and get to your destination in minutes",
  },
  {
    id: 2,
    source: require("../../assets/images/splash2.png"),
    title: "TRACK YOUR RIDE",
    description: "Real-time tracking of your ride with live updates",
  },
  {
    id: 3,
    source: require("../../assets/images/splash3.png"),
    title: "ARRIVE SAFELY",
    description: "Secure and comfortable rides at your fingertips",
  },
];

export default function OnboardingScreen() {
  // State Management
  const [focused, setFocused] = useState(0);
  
  // Refs
  const scrollViewRef = useRef<ScrollView>(null);
  
  // Router
  const router = useRouter();

  // Scroll to Page Handler (Memoized)
  const scrollToPage = useCallback((pageIndex: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: pageIndex * width,
        animated: true,
      });
      setFocused(pageIndex);
    }
  }, []);

  // Page Indicator Component
  const PageIndicator = React.memo(() => (
    <View style={styles.indicatorContainer}>
      {ONBOARDING_SLIDES.map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            focused === index ? styles.activeIndicator : {},
          ]}
        />
      ))}
    </View>
  ));

  // Navigation Arrows Component
  const NavigationArrows = React.memo(() => (
    <View style={styles.navigationContainer}>
      {focused > 0 && (
        <TouchableOpacity
          style={styles.navLeft}
          onPress={() => scrollToPage(focused - 1)}
          accessibilityLabel="Previous slide"
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <FontAwesome6 name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      )}

      {focused < ONBOARDING_SLIDES.length - 1 && (
        <TouchableOpacity
          style={[
            styles.navRight,
            { 
              left: focused === 0 
                ? width / 1.3 
                : width / 1.53 
            },
          ]}
          onPress={() => scrollToPage(focused + 1)}
          accessibilityLabel="Next slide"
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <FontAwesome6 name="arrow-right" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  ));

  // Final Screen Actions Component
  const FinalScreenActions = React.memo(() => {
    if (focused !== ONBOARDING_SLIDES.length - 1) return null;

    return (
      <View style={styles.finalScreenActions}>
        <GradientView
          colors={["#FF8101", "#FF1E5E", "#6720FF"]}
          end={[1, 1]}
          start={[0, 0]}
          style={styles.buttonGradient}
        >
          <CustomButton
            buttonText="Create Account"
            buttonStyle={styles.createAccBut}
            textStyle={styles.createAccText}
            type={false}
            onPress={() => router.push("/auth/createAccount")}
          />
        </GradientView>

        <CustomButton
          buttonText="Sign in"
          buttonStyle={styles.signinBut}
          textStyle={styles.signinText}
          type={false}
          onPress={() => router.push("/auth/signIn")}
        />
      </View>
    );
  });

  // Handle Scroll Event
  const handleScroll = (e: any) => {
    const pageIndex = Math.round(
      e.nativeEvent.contentOffset.x / width
    );
    setFocused(pageIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        {ONBOARDING_SLIDES.map((item) => (
          <View key={item.id} style={styles.slide}>
            <Image 
              source={item.source} 
              style={styles.image} 
              resizeMode="cover"
            />
            <LinearGradient
              colors={["transparent", "#000000", "rgba(0,0,0,0.8)"]}
              style={styles.gradient}
            />
            <View style={styles.textContainer}>
              <CustomText
                helperText={item.title}
                textStyle={styles.titleText}
                type={true}
              />
              <CustomText
                helperText={item.description}
                textStyle={styles.descriptionText}
                type={true}
              />
            </View>
          </View>
        ))}
      </ScrollView>

      <PageIndicator />
      <NavigationArrows />
      <FinalScreenActions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Style.colors.background,
  },
  slide: {
    width: width,
    height: height,
  },
  image: {
    width: width,
    height: height,
    position: "absolute",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: height / 2,
  },
  textContainer: {
    position: "absolute",
    bottom: height / 4,
    alignSelf: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    letterSpacing: 1,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    width: width / 1.5,
  },
  indicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: height / 3.4,
    alignSelf: "center",
  },
  indicator: {
    padding: 5,
    backgroundColor: "#BA24D5",
    margin: 5,
    borderRadius: 5,
    height: 5,
    width: 5,
  },
  activeIndicator: {
    backgroundColor: "#FF532D",
    width: 30,
    height: 10,
  },
  navigationContainer: {
    position: "absolute",
    bottom: Platform.OS === 'ios' ? 50 : 30,
    width: width,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  navLeft: {
    padding: 10,
  },
  navRight: {
    padding: 10,
  },
  finalScreenActions: {
    position: "absolute",
    bottom: 0,
    width: width,
    alignItems: "center",
  },
  buttonGradient: {
    borderRadius: 25,
    marginBottom: 20,
  },
  createAccBut: {
    padding: 15,
    borderRadius: 25,
    width: width / 2,
  },
  createAccText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  signinBut: {
    marginBottom: 30,
  },
  signinText: {
    fontSize: 20,
    color: "#FF532D",
  },
});