import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";
import Header from "./header/Header.component";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome to Macrozone</Text>
      <Header />
    </View>
  );
}
