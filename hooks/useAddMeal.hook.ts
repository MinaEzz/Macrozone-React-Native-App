import { useState } from "react";

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

  function handleAddMeal() {
    console.log("Form Data: ", formData);
  }

  return {
    formData,
    onChange,
    handleAddMeal,
  };
}
