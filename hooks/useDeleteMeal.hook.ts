import { deleteMeal } from "@/storage/meals";
import * as Haptics from "expo-haptics";
import { Alert } from "react-native";

export function useDeleteMeal(id: string, onDelete: () => void) {
  function handleLongPress() {
    Alert.alert(
      "Delete Meal",
      "Are you sure you want to delete this meal?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: handleDeleteMeal,
          style: "destructive",
        },
      ],
      { cancelable: true },
    );

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  }

  async function handleDeleteMeal() {
    await deleteMeal(id);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    onDelete();
  }

  return {
    handleLongPress,
  };
}
