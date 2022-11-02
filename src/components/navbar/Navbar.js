import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate, NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useContext } from 'react';
import { UserContext } from '../../context/AuthContext';
import "./Navbar.css";

function Header() {
  const {authUser, setAuthUser}= useContext(UserContext)
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
  }
  return (
    <div className="navigation_top_user">
      <div></div>
        <div onClick={handleClick} className='Logo' as={NavLink} to="/">
          <b className="leftOne">L</b>
          <b className="rightOne">F</b>
        </div>
      <div className='rightNav'>
      {!authUser 
        ? <a href="/login"> Login </a> 
        : <a>Welcome {authUser.firstName}</a>
      }
      {!authUser? null : <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>}

      </div>
    </div>
  );
}

export default Header;