

import React from "react"; 
import { Nav, NavLink, NavMenu }  

    from "./NavbarElements"; 

  
const Navbar = () => { 

  return ( 

    <> 

      <Nav> 

        <NavMenu> 

          <NavLink to="/about" activeStyle> 

            About 

          </NavLink> 

          <NavLink to="/contact" activeStyle> 

            Contact Us 

          </NavLink> 

          <NavLink to="/blogs" activeStyle> 

            Project Links 

          </NavLink> 

          <NavLink to="/sign-up" activeStyle> 

            Request Work

          </NavLink> 

        </NavMenu> 

      </Nav> 

    </> 

  ); 
}; 

  

export default Navbar; 