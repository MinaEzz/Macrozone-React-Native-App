import { colors } from "@/styles/global";
import IMeal from "@/types/meal.types";
import { Ionicons } from "@expo/vector-icons";
import { Share, TouchableOpacity } from "react-native";

type ShareButtonProps = {
  meals: IMeal[];
};

export default function ShareButton({ meals }: ShareButtonProps) {
  const handleShare = async () => {
    const totals = meals.reduce(
      (acc, meal) => ({
        calories: acc.calories + meal.calories,
        protein: acc.protein + meal.protein,
        carbs: acc.carbs + meal.carbs,
        fat: acc.fat + meal.fat,
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 },
    );

    await Share.share({
      message: `MacroZone Daily Summary\n\n🔥 Calories: ${totals.calories}\n💪 Protein: ${totals.protein}g\n🍞 Carbs: ${totals.carbs}g\n🥑 Fat: ${totals.fat}g\n\n🍽️ Meals: ${meals.length} logged today`,
    });
  };

  return (
    <TouchableOpacity onPress={handleShare}>
      <Ionicons name="share-outline" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
}
