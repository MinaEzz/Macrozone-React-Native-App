import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";
import AddMealForm from "./add-meal-form/AddMealForm.component";

export default function AddMeal() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Add Meal</Text>
      <AddMealForm />
    </View>
  );
}
