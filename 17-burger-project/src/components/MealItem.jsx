import { useContext } from "react";
import { currencyFormatter } from "../utilities/formatting";
import Button from "./UI/Button";
import CartContext from "../contexts/CartContext";

export default function MealItem({meal}) {
  const cartCtx = useContext(CartContext);

  function addMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button type="button" onClick={addMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}