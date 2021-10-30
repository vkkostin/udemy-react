import React, { useState, useEffect, useRef } from 'react';
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import './Search.css';
import useHttp from '../../hooks/http';

const URL = 'https://testing-3ad08-default-rtdb.firebaseio.com/ingredients.json'

const Search = React.memo(props => {
  const { onLoadIngredients } = props
  const [enteredFilter, setEnteredFilter] = useState('')
  const inputRef = useRef()

  const { isLoading, data, error, sendRequest, clear} = useHttp()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enteredFilter}"`

        sendRequest(`${URL}${query}`, 'GET')
      }
    }, 500)

    return () => {
      clearTimeout(timer)
    }

  }, [enteredFilter, onLoadIngredients, inputRef, sendRequest])

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = []

      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        })
      }

      onLoadIngredients(loadedIngredients)
    }
  }, [data, isLoading, error, onLoadIngredients])

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input type="text" ref={inputRef} value={enteredFilter} onChange={({ target: { value } }) => setEnteredFilter(value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
