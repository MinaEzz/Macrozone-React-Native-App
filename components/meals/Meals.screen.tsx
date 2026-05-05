import { useGetMeals } from "@/hooks/useGetMeals.hook";
import { globalStyles } from "@/styles/global";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import MealItem from "../shared/meal-item/MealItem.component";
import { useDeleteAllMeals } from "@/hooks/useDeleteAllMeals.hook";

export default function Meals() {
  const { meals, fetchMeals } = useGetMeals();
  const { handleDeleteAllMeals } = useDeleteAllMeals(fetchMeals);
  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>All Meals</Text>
        <TouchableOpacity onPress={handleDeleteAllMeals}>
          <Text style={styles.clearButton}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30 }}>
        {meals.length === 0 ? (
          <Text style={globalStyles.empty}>No meals logged yet.</Text>
        ) : (
          meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              onDelete={fetchMeals}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = {
  clearButton: {
    color: "red",
    fontSize: 16,
  },
};
