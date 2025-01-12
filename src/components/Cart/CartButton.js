import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/MyCart';

const CartButton = (props) => {
  const dispatch = useDispatch();

  function toggleCart(){
    dispatch(cartActions.cartToggle())
  }

  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
