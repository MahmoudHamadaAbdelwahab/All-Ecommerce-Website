import React from 'react'
import {Container,FormControl,Nav,Navbar} from "react-bootstrap"
import {ShoppingCart} from "phosphor-react"
import {UserCircle} from "phosphor-react"
 const NavBarLogin = () => {
  return (
<Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
<Container >
  <Navbar.Brand >
    <a href='/' style={{textDecoration: 'none' , color:'white'}}>
      <h1 style={{marginLeft:'30px'}}>Nour</h1>
    </a>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="basic-navbar-nav">
    <FormControl
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    />
    <Nav className='me-auto'>

      <Nav.Link href="/login" className='nav-text mt-2 d-flex justify-content-center gap-20'>
        <UserCircle size={32}/>
        <p style={{color:"white", marginRight:"10px"}}>دخول</p>
      </Nav.Link>

      <Nav.Link href="/cart" className='nav-text d-flex mt-2 justify-content-center'>
      <ShoppingCart size={32}/>
        <p style={{color:"white" , marginRight:"10px"}}>العربه</p>
      </Nav.Link>

    </Nav>

  </Navbar.Collapse>
</Container>
</Navbar>


  )
} 

export default NavBarLogin;