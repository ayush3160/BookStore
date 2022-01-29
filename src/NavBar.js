import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = (props) => {
  const value = useSelector((state) => state.counter.value);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand nav-size" to="/">
          <span className="text-danger">Book</span>
          <span className="text-info nav-size">Store</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link nav-size text-light" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-size text-light" to="about">
                About
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link nav-size text-danger" to="cart">
                <img src="/263142.png" className="fav-width" /> : {value.length}
              </Link>
            </li>
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                props.handleSearch(e.target.value);
              }}
            />
            <Link
              className="btn btn-outline-success my-2 my-sm-0"
              to="search"
            >
              Search
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
