import { addMeal } from "@/storage/meals";
import { useState } from "react";
import { Alert } from "react-native";
import { router } from "expo-router";

export function useAddMeal() {
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });

  function onChange(key: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  async function handleAddMeal() {
    if (!formData.name || !formData.calories) {
      Alert.alert("Error", "Please enter a meal name and calories.");
      return;
    }

    await addMeal({
      name: formData.name,
      calories: Number(formData.calories),
      protein: Number(formData.protein) || 0,
      carbs: Number(formData.carbs) || 0,
      fat: Number(formData.fat) || 0,
    });

    setFormData({
      name: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
    });

    Alert.alert("Success", "Meal added successfully!");

    router.push("/");
  }

  return {
    formData,
    onChange,
    handleAddMeal,
  };
}
