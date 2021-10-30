const expenses = [
  {
    id: '1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: '2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: '3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: '4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const chartDataPoints = [
  { label: 'Jan', value: 0 },
  { label: 'Feb', value: 0 },
  { label: 'Mar', value: 0 },
  { label: 'Apr', value: 0 },
  { label: 'May', value: 0 },
  { label: 'Jun', value: 0 },
  { label: 'Jul', value: 0 },
  { label: 'Aug', value: 0 },
  { label: 'Sep', value: 0 },
  { label: 'Oct', value: 0 },
  { label: 'Nov', value: 0 },
  { label: 'Dec', value: 0 },
]

export { expenses, chartDataPoints }