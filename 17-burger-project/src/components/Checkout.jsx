import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../contexts/CartContext";
import { currencyFormatter } from "../utilities/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../contexts/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {data, isLoading: isSending, error, sendRequest, clearData} = useHttp('http://localhost:3000/orders', requestConfig);

  const cartTotal = cartCtx.items.reduce((total, item) => total + item.quantity * item.price, 0);



  function closeForm() {
    userProgressCtx.hideCheckout();
  }

  function submitForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const customerData = Object.fromEntries(formData.entries());

    sendRequest(JSON.stringify({
      order: {
        items: cartCtx.items,
        customer: customerData,
      }
    }));
  }

  function finishOrder() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }



  let actions = (
    <>
      <Button type="button" textOnly onClick={closeForm}>Close</Button>
      <Button type="submit">Submit</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order...</span>
  }

  if (data && !error) {
    return (
      <Modal open={userProgressCtx.progress === 'checkout'} closeEvent={finishOrder}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>We will get back to you with more details via email within the next few minutes.</p>
        <p className="modal-actions">
          <Button onClick={finishOrder}>Okay</Button>
        </p>
      </Modal>
    );
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

        {error && <Error title="Failed to submit order" message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}