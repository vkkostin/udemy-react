import { useEffect, useState } from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState()

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://testing-3ad08-default-rtdb.firebaseio.com/meals.json')

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const responseData = await response.json()

      const loadedMeals = []

      for (const id in responseData) {
        const { name, description, price } = responseData[id]
        loadedMeals.push({ id, name, description, price })
      }

      setMeals(loadedMeals)
      setIsLoading(false)
    }

    fetchMeals().catch(error => {
      setIsLoading(false)
      setHttpError(error.message)
    })
  }, [])

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={classes.error}>
        <p>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map(meal => 
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  )

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals