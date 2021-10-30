import classes from './CartItem.module.css';

const CartItem = ({ item, onRemove, onAdd }) => {
  const { id, name, amount, price } = item

  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{formattedPrice}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove(id)}>−</button>
        <button onClick={onAdd(item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
