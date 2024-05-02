import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function navigateEvent() {
    navigate('/products');
  }

  return (
    <div>
      <h1>Homepage</h1>
      <p>Go to <Link to="/products">the list of products</Link></p>
      <p>
        <button onClick={navigateEvent}>Navigate</button>
      </p>
    </div>
  );
}