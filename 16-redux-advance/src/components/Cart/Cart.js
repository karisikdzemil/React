import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const quantityRedux = useSelector(state => state.quantity.quantity);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
       {quantityRedux === 0 ? <p>Your cart is empty!</p> : <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />}
      </ul>
    </Card>
  );
};

export default Cart;
