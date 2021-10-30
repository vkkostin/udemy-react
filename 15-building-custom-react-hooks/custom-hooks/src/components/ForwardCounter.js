import useCounter from '../hooks/use-counter'
import Card from './Card';

const ForwardCounter = () => <Card>{useCounter('+')}</Card>

export default ForwardCounter;
