import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header(){
    let [category,setcategories]=useState([])
async function getAllProduct(){
    try{
        let response= await fetch("https://fakestoreapi.com/products/categories")
        let data=await response.json()
        console.log(data)
        setcategories(data)
    } catch(err){
   console.log(err)
    }
}
useEffect(()=>{
    getAllProduct()
},[])




    return(<>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link > <Link to='/home'> Home</Link></Nav.Link>
            <Nav.Link> <Link to='/services'> Services</Link></Nav.Link>
            <Nav.Link><Link to='/Login'> Login</Link></Nav.Link>
            <Nav.Link><Link to='/product'> product</Link></Nav.Link>
            <Nav.Link><Link to='/nameform'> Nameform</Link></Nav.Link>
            <Nav.Link><Link to='/greet/:name'></Link></Nav.Link>
            <Nav.Link><Link to='/category/:category'></Link></Nav.Link>
            <NavDropdown title="caterogry" id="navbarScrollingDropdown">
            {category && category.map((category)=>
              <NavDropdown.Item ><Link to={`/category/${category}`} >{category}</Link></NavDropdown.Item>
            )}
              </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>)
}
export default Header