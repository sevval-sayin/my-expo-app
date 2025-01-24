import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, { useSharedValue, useAnimatedProps, withRepeat, withTiming } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const BackgroundDots = () => {
  const dots = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    cx: Math.random() * 400,
    cy: Math.random() * 800,
    r: Math.random() * 3 + 2,
  }));

  const offsets = dots.map(() => useSharedValue(Math.random() * 800));

  useEffect(() => {
    offsets.forEach((offset) => {
      offset.value = withRepeat(
        withTiming(offset.value + 200, { duration: 5000 }),
        -1,
        true
      );
    });
  }, []);

  return (
    <Svg style={StyleSheet.absoluteFill}>
      {dots.map((dot, index) => {
        const animatedProps = useAnimatedProps(() => ({
          cy: offsets[index].value % 800, // Dikey pozisyonu hareket ettir
        }));

        return (
          <AnimatedCircle
            key={dot.id}
            cx={dot.cx}
            r={dot.r}
            fill="#3498db"
            opacity={Math.random() * 0.5 + 0.5}
            animatedProps={animatedProps}
          />
        );
      })}
    </Svg>
  );
};

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <BackgroundDots />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f4f4f4",
      position: "relative",
    },
    content: {
      flex: 1,
      justifyContent: "flex-start", // İçeriği üstten başlat
      alignItems: "center", // İçeriği yatayda ortala
      paddingHorizontal: 20,
      paddingVertical: 30,
      paddingTop: 80, // Tüm içerik için üstten boşluk
    },
  });
  

export default Layout;
