import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/MyCart';

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();

  function addToCart(id, title, description, price){
    dispatch(cartActions.addItem(id, title, description, price))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => addToCart({id, title, description, price})}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
