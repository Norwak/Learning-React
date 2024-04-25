import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../contexts/CartContext";
import { currencyFormatter } from "../utilities/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../contexts/UserProgressContext";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((total, item) => total + item.quantity * item.price, 0);



  function closeForm() {
    userProgressCtx.hideCheckout();
  }

  function submitForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const customerData = Object.fromEntries(formData.entries());

    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        }
      }),
    });
  }



  return (
    <Modal open={userProgressCtx.progress === 'checkout'} closeEvent={closeForm}>
      <form onSubmit={submitForm}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" name="name" />
        <Input label="Email Address" type="email" name="email" />
        <Input label="Street" type="text" name="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" name="postal-code" />
          <Input label="City" type="text" name="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={closeForm}>Close</Button>
          <Button type="submit">Submit</Button>
        </p>
      </form>
    </Modal>
  );
}