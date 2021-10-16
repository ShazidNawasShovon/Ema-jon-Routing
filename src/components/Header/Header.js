import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "../Shop/Shop";
import useAuth from "../Hook/useAuth";

const Header = () => {
  const { handleSearch } = Shop();
  const { user, logOut } = useAuth();
  return (
    <>
      {/* <div className="header">
                <img className="logo" src={logo} alt="" />
                <nav>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/order">Order Review</NavLink>
                    <NavLink to="/inventory">Manage Inventory </NavLink>
                    
                </nav>
            </div> */}
      <Navbar bg="light" sticky="top" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="logo img-fluid" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/shop">
            Home
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/order">
              Order Review
            </Nav.Link>
            <Nav.Link as={Link} to="/inventory">
              Inventory
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={handleSearch} variant="outline-success">
              Search
            </Button>
          </Form>
          <Nav className="me-auto">
            {user.email && (
              <span className="ms-3 my-auto border border-3 rounded rounded-3 fw-bold p-2 ">
                {user.displayName}
              </span>
            )}
            {user.email ? (
              <Button onClick={logOut} variant="outline-info " className="ms-1">
                Log Out
              </Button>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Sign up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
