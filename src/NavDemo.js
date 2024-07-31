import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Services from "./Services";
import Login from "./Login";
import Home1 from "./Home1";
function NavDemo(){
    return(<>
    <div className="App">
        <BrowserRouter>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to='/home'> Home</Link></Nav.Link>
            <Nav.Link><Link to='/service'>Services</Link></Nav.Link>
            <Nav.Link> <Link to='/Login'>Login</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/home" element={<Home1></Home1>}></Route>
        <Route path="/service" element={<Services></Services>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
      </Routes>
        </BrowserRouter>
    </div>
    </>)
}
export default NavDemo