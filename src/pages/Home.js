import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Hello home page</h1>
      <Link to="/products">Products page</Link>
    </div>
  );
}
