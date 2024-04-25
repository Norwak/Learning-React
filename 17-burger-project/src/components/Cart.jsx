import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../contexts/CartContext";
import { currencyFormatter } from "../utilities/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../contexts/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((total, item) => total + item.quantity * item.price, 0);

  function closeCart() {
    userProgressCtx.hideCart();
  }

  function showCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'} closeEvent={userProgressCtx.progress === 'cart' ? closeCart : null}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map(item => (
          <CartItem 
            key={item.id} 
            name={item.name} 
            quantity={item.quantity} 
            price={item.price} 
            onDecrease={() => cartCtx.removeItem(item.id)} 
            onIncrease={() => cartCtx.addItem(item)} />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={closeCart}>Close</Button>
        {cartCtx.items.length > 0 && (<Button onClick={showCheckout}>Go to Checkout</Button>)}
      </p>
    </Modal>
  );
}