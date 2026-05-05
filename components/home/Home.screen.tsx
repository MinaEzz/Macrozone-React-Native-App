import { useGetMeals } from "@/hooks/useGetMeals.hook";
import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";
import Header from "./header/Header.component";
import MacroGrid from "./macro-grid/MacroGrid.component";
import RecentMeals from "./recent-meals/RecentMeals.component";

export default function Home() {
  const { meals, fetchMeals } = useGetMeals();

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome to Macrozone</Text>
      <Header />
      <MacroGrid meals={meals} />
      <RecentMeals meals={meals} onDelete={fetchMeals} />
    </ScrollView>
  );
}
