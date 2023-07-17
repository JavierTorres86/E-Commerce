
//rafce
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


 const NavBar = () => {
  return (
   
     <>
          <Navbar bg="dark" data-bs-theme="dark">
              <Container>
               <NavLink to='/home' className='logoContainer'> 
                 <img class="Logo" src = "https://images.ctfassets.net/m8onsx4mm13s/72p8qgeqA4UK7FD2MwyA19/cbc4a71ff92b788b791a53fa683dc6f4/gibson__1_.svg"  alt = "Logo" /> 
               </NavLink>
                <Nav className="me-auto">
                  <NavLink to="/electricas"className ='electricas'>Electricas </NavLink>
                  <NavLink to='/acusticas' className ='electricas'>Acusticas </NavLink>
                  <NavLink to='/accesorios' className ='electricas'>Accesorios</NavLink>
                </Nav>

               <NavLink to="/carrito" className='logoCarrito'>
                 {<CartWidget/>} 
                </NavLink>
               </Container>
          </Navbar>
        
        </>
      );
    };
    
    
   


/*rfce
import React from 'react'

function NavBar() {
  return (
    <div>NavBar</div>
  )
}
*/
export default NavBar