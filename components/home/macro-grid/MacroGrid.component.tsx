import IMeal from "@/types/meal.types";
import { calculateTotals } from "@/utils/calculateTotals";
import { StyleSheet, View } from "react-native";
import MacroCard from "./macro-card/MacroCard.component";

export default function MacroGrid({ meals }: { meals: IMeal[] }) {
  const totals = calculateTotals(meals);

  return (
    <View style={styles.grid}>
      <MacroCard
        label="Calories"
        value={`${totals.calories}kcl`}
        goal="2,000"
        color="#ff6b6b"
      />
      <MacroCard
        label="Protein"
        value={`${totals.protein}g`}
        goal="150g"
        color="#4ecdc4"
      />
      <MacroCard
        label="Carbs"
        value={`${totals.carbs}g`}
        goal="250g"
        color="#ffd93d"
      />
      <MacroCard
        label="Fat"
        value={`${totals.fat}g`}
        goal="65g"
        color="#6bcb77"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
