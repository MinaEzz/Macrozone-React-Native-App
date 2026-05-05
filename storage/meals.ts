import IMeal from "@/types/meal.types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MEALS_KEY = "meals";

export async function getMeals(): Promise<IMeal[]> {
  const data = await AsyncStorage.getItem(MEALS_KEY);
  return data ? JSON.parse(data) : [];
}

export async function addMeal(
  meal: Omit<IMeal, "id" | "createdAt">,
): Promise<IMeal> {
  const meals = await getMeals();
  const newMeal: IMeal = {
    ...meal,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };

  await AsyncStorage.setItem(MEALS_KEY, JSON.stringify([newMeal, ...meals]));
  return newMeal;
}

export async function deleteMeal(id: string): Promise<void> {
  const meals = await getMeals();
  const filtered = meals.filter((meal) => meal.id !== id);
  await AsyncStorage.setItem(MEALS_KEY, JSON.stringify(filtered));
}

export async function deleteAllMeals() {
  await AsyncStorage.removeItem(MEALS_KEY);
}
