
//rafce
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Contador from '../Contador/Contador';

export const NavBar = () => {
  return (
   
     <>
          <Navbar bg="dark" data-bs-theme="dark">
              <Container>
               <Nav.Link href="#home" className='logoContainer'> 
                 <img class="Logo" src = "https://images.ctfassets.net/m8onsx4mm13s/72p8qgeqA4UK7FD2MwyA19/cbc4a71ff92b788b791a53fa683dc6f4/gibson__1_.svg"  alt = "Logo" /> 
               </Nav.Link>
                <Nav className="me-auto"> 
                  <Nav.Link href="#electricas"><span className ="electricas">Electricas </span></Nav.Link>
                  <Nav.Link href="#acusticas"><span className ="electricas">Acusticas  </span></Nav.Link>
                  <Nav.Link href="#acsesorios"><span className ="electricas">Accesorios</span></Nav.Link>
                </Nav>

               <Nav.Link href="#carrito" className='logoCarrito'>
                 {<CartWidget/>} 
                </Nav.Link>
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
