import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Photo Gallery" }} />
      <Stack.Screen name="image-detail" options={{ title: "View Image" }} />
    </Stack>
  );
}
