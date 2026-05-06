import { colors } from "@/styles/global";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.background}
      />
    </>
  );
}
