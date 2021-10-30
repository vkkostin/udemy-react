import { useMemo } from 'react'

const DemoList = props => {
  const { items } = props
  console.log('DEMOLIST RUNNING')

  // stores the result of the passed-in function
  const sortedList = useMemo(() => {
    console.log('Items Sorted')
    return items.sort((a, b) => a - b)
  }, [items])

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default DemoList