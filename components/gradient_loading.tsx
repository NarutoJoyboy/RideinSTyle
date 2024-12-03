import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

export default function GradientLoading() {
  const colors = [
    "#875BF7",
    "#875BF7",
    "#9F1AB1",
    "#BA24D5",
    "#D444F1",
    "#E04F16",
    "#FF532D",
    "#F38744",
  ];

  const [colorIndex, setcolorIndex] = useState(0);
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setcolorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 100); // Update every 500ms

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <View>
      {colors.map((color, index) => {
        return (
          <View
            key={index}
            style={[
              {
                borderColor: color,
                transform: [
                  {
                    translateX:
                      20 * Math.cos((index * 2 * Math.PI) / colors.length),
                  },
                  {
                    translateY:
                      20 * Math.sin((index * 2 * Math.PI) / colors.length),
                  },
                ],
                backgroundColor: colorIndex === index ? color : "transparent",
              },

              styles.circle,
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    top: 120,
  },
});
