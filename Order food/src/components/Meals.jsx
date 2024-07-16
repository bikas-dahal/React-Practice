import { useState, useEffect } from 'react';
import MealItem from './MealItem';

export default function Meals() {
    const [mealRender, setMealRender] = useState([])

    useEffect(() => {
        async function fetchMeal() {
            const response = await fetch('http://localhost:3000/meals')

            const meals = await  response.json()
            setMealRender(meals)
        }

        fetchMeal()

    }, [])

    return(
        <ul id='meals'>
            {mealRender.map(meal => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    )
}