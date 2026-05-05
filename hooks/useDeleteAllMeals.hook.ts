import { deleteAllMeals } from "@/storage/meals";

export function useDeleteAllMeals(onDelete: () => void) {
  async function handleDeleteAllMeals() {
    await deleteAllMeals();
    onDelete();
  }

  return {
    handleDeleteAllMeals,
  };
}
