import { colors } from "@/styles/global";
import { calculateTotals } from "@/utils/calculateTotals";
import { Ionicons } from "@expo/vector-icons";
import { Share, TouchableOpacity } from "react-native";
import IShareButtonProps from "./ShareButton.types";

export default function ShareButton({ meals }: IShareButtonProps) {
  const handleShare = async () => {
    const totals = calculateTotals(meals);

    const summary = `MacroZone Daily Summary\n\n🔥 Calories: ${totals.calories}\n💪 Protein: ${totals.protein}g\n🍞 Carbs: ${totals.carbs}g\n🥑 Fat: ${totals.fat}g\n\n🍽️ Meals: ${meals.length} logged today`;

    await Share.share({
      message: summary,
    });
  };

  return (
    <TouchableOpacity onPress={handleShare}>
      <Ionicons name="share-outline" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
}
