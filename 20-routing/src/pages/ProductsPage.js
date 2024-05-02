import { Link } from "react-router-dom";

const products = [
  {slug: 'product-1', title: 'Product 1'},
  {slug: 'product-2', title: 'Product 2'},
  {slug: 'product-3', title: 'Product 3'},
];

export default function ProductsPage() {
  return (
    <div>
      <h1>Products list</h1>
      <ul>
        {products.map(product => <li key={product.slug}><Link to={`/${product.slug}/`}>{product.title}</Link></li>)}
      </ul>
    </div>
  );
}