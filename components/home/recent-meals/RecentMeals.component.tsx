import { Text, View } from "react-native";
import { globalStyles } from "@/styles/global";
import IRecentMealsProps from "./RecentMeals.types";
import MealItem from "@/components/shared/meal-item/MealItem.component";

export default function RecentMeals({ meals, onDelete }: IRecentMealsProps) {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
      {meals.length === 0 ? (
        <Text style={globalStyles.empty}>No meals logged yet.</Text>
      ) : (
        meals
          .slice(0, 5)
          .map((meal) => (
            <MealItem
              key={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              id={meal.id}
              onDelete={onDelete}
            />
          ))
      )}
    </View>
  );
}
