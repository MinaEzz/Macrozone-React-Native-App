import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";

export default function Meals() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>All Meals</Text>
    </ScrollView>
  );
}
