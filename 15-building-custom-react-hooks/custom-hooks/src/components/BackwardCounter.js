import useCounter from '../hooks/use-counter'
import Card from './Card';

const BackwardCounter = () => <Card>{useCounter('-')}</Card>

export default BackwardCounter;
