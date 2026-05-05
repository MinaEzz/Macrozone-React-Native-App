import IMeal from "@/types/meal.types";

export default interface IRecentMealsProps {
  meals: IMeal[];
  onDelete: () => void;
}
