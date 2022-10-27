import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3>Grocery List</h3>
      <div className="links">
        <Link to="/">To Buy</Link>
        <Link to="/purchased">Purchased</Link>
      </div>
    </div>
  );
};

export default Navbar;
