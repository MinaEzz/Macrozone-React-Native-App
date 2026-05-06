import { colors } from "@/styles/global";
import { calculateTotals } from "@/utils/calculateTotals";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import * as Haptics from "expo-haptics";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import ICopyButtonProps from "./CopyButton.types";

export default function CopyButton({ meals }: ICopyButtonProps) {
  const handleCopy = async () => {
    const totals = calculateTotals(meals);

    const summary = `MacroZone Daily Summary\n\n🔥 Calories: ${totals.calories}\n💪 Protein: ${totals.protein}g\n🍞 Carbs: ${totals.carbs}g\n🥑 Fat: ${totals.fat}g\n\n🍽️ Meals: ${meals.length} logged today`;

    await Clipboard.setStringAsync(summary);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Alert.alert("Copied!", "Macro summary copied to clipboard.");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleCopy}>
      <Ionicons name="copy-outline" size={18} color={colors.primary} />
      <Text style={styles.text}>Copy Summary</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 16,
  },
  text: {
    color: colors.primary,
    fontSize: 14,
  },
});
