import classes from './CartButton.module.css';
import { useDispatch, useSelector } from "react-redux";
import uiSlice, { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch()
  const quantity  = useSelector(state => state.cart.totalQuantity)
  const showCartHandler = () => {
    dispatch(uiActions.toggle())
  }
  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
