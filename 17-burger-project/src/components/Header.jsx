import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../contexts/CartContext';

export default function Header() {
  const cartCtx = useContext(CartContext);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="ReactFood Logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({cartCtx.items.reduce((total, item) => total + item.quantity, 0)})</Button>
      </nav>
    </header>
  );
}