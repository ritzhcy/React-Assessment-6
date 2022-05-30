import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/Students">
        Students
      </Link>
      <Link className="link" to="/Contact">
        Contact
      </Link>
    </nav>
  );
}