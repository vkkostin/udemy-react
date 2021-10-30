import { useState, useEffect } from 'react';

const ops = {
  '+': prevCounter => prevCounter + 1,
  '-': prevCounter => prevCounter - 1,
}

const useCounter = op => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(ops[op]);
    }, 1000);

    return () => clearInterval(interval);
  }, [op]);

  return counter
}

export default useCounter