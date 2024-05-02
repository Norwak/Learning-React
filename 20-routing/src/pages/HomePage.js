import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Go to <Link to="/products">the list of products</Link></p>
    </div>
  );
}