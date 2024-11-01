import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native"; // Import useRoute from React Navigation
import {
  PinchGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
export default function ImageDetail() {
  const route = useRoute();
  const { uri } = route.params;
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPinchGestureEvent = (event) => {
    scale.value = withSpring(event.nativeEvent.scale);
  };

  const onPinchGestureEnd = () => {
    scale.value = withTiming(1); // Reset to original size on release
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PinchGestureHandler
        onGestureEvent={onPinchGestureEvent}
        onEnded={onPinchGestureEnd}
      >
        <Animated.View style={[styles.container, animatedStyle]}>
          <Image source={{ uri }} style={styles.image} resizeMode="contain" />
        </Animated.View>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal:20,
    
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
