import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals');
      
      if (response.ok) {
        const meals = await response.json();
        setMeals(meals);
      }
    }
    fetchMeals();
  }, [])



  return (
    <ul id="meals">
      {meals.map(meal => <MealItem key={meal.name} meal={meal} />)}
    </ul>
  );
}