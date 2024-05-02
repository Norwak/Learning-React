import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <div>
      <h1>Products list</h1>
      <p>Go to <Link to="/">the home page</Link></p>
    </div>
  );
}