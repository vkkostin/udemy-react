import { useCallback, useState, useMemo } from 'react'
import Button from '../UI/Button/Button'
import DemoList from './DemoList'

const UseMemoDemo = () => {
  const [listTitle, setListTitle] = useState('My List')

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title')
  }, [])

  return (
    <div>
      <DemoList title={listTitle} items={useMemo(() => [5, 3, 1, 10 ,9], [])} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default UseMemoDemo