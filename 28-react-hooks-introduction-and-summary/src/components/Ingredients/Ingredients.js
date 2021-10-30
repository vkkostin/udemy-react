import React, { useReducer, useCallback, useEffect, useMemo } from 'react';
import IngredientList from './IngredientList'
import IngredientForm from './IngredientForm';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal'
import useHttp from '../../hooks/http';

const URL = 'https://testing-3ad08-default-rtdb.firebaseio.com'

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET': return action.ingredients;
    case 'ADD': return [...currentIngredients, action.ingredient]
    case 'DELETE': return currentIngredients.filter(ing => ing.id !== action.id)
    default: throw new Error('Should not get here')
  }
}

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, [])
  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqExtra,
    reqIdentifier,
    clear
  } = useHttp()

  useEffect(() => {
    if (!isLoading && reqIdentifier === 'REMOVE_INGREDIENT') {
      dispatch({ type: 'DELETE', id: reqExtra })
    } else if (!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
      dispatch({ type: 'ADD', ingredient: { id: data.name, ...reqExtra, } })
    }

    
  }, [data, reqExtra, reqIdentifier, isLoading, error])

  const addIngredientHandler = useCallback(ingredient => {
    sendRequest(
      `${URL}/ingredients.json`,
      'POST',
      JSON.stringify(ingredient),
      ingredient,
      'ADD_INGREDIENT'
    )
  }, [sendRequest])

  const removeIngredientHandler = useCallback(id => {
    sendRequest(`${URL}/ingredients/${id}.json`, 'DELETE', null, id, 'REMOVE_INGREDIENT')
  }, [sendRequest])

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    dispatch({ type: 'SET', ingredients: filteredIngredients })
  }, [])

  const ingredientList = useMemo(() =>
    <IngredientList
      ingredients={userIngredients}
      onRemoveItem={removeIngredientHandler}
    />,
    [userIngredients, removeIngredientHandler]
  )

  return (
    <div className="App">
      {error ? <ErrorModal onClose={clear}>{error}</ErrorModal> : null}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
