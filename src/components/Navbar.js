import {NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="header__left">
      <nav className="header__links">
        <ul>
          <li>
            <NavLink to="/home">home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">shop</NavLink>
          </li>
         
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
