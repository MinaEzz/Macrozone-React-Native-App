import { getMeals } from "@/storage/meals";
import IMeal from "@/types/meal.types";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

export function useGetMeals() {
  const [meals, setMeals] = useState<IMeal[]>([]);

  async function fetchMeals() {
    const data = await getMeals();
    setMeals(data);
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, []),
  );

  return { meals, fetchMeals };
}
