import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="image-detail" options={{ title: "View Image" }} />
      <Stack.Screen name="show-images" options={{ title: "Image" }} />
    </Stack>
  );
}
