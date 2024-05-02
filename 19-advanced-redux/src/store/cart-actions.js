import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export function fetchCartData() {
  return async (dispatch) => {
    async function fetchData() {
      const response = await fetch('https://redux-learning-9ecd6-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
  
      if (!response.ok) {
        throw new Error('Fetching cart data failed.');
      }

      return await response.json();
    }

    try {
      const cart = await fetchData();
      dispatch(cartActions.replaceCart({
        items: cart.items || [],
        totalQuantity: cart.totalQuantity,
      }));

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Fetched cart data successfully!',
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed!',
      }));
    }
  }
}

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    }));

    async function sendRequest() {
      const response = await fetch('https://redux-learning-9ecd6-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          ...cart,
          changed: false,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    }

    try {
      await sendRequest();

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sent cart data failed!',
      }));
    }
  };
}