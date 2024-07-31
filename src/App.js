import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Link, Route} from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Login from './Login';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FetchProduct from './FetchProduct';
import NameForm from './NameForm';
import Greet from './Greet';
import Layout from './Layout';
import ProductByCat from './ProductByCat';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar bg="dark" data-bs-theme="dark"> */}
        {/* <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link > <Link to='/home'> Home</Link></Nav.Link>
            <Nav.Link> <Link to='/services'> Services</Link></Nav.Link>
            <Nav.Link><Link to='/Login'> Login</Link></Nav.Link>
            <Nav.Link><Link to='/product'> product</Link></Nav.Link>
            <Nav.Link><Link to='/nameform'> Nameform</Link></Nav.Link>
            <Nav.Link><Link to='/greet/:name'></Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <Routes>
        {/* here the first route is the parent of all the other component ,
        it will load if any url will come, it will go to the layout and dispaly header ,
        and footer then, check the child url name it will render based on the url ,placed on the outlet component
        we use outlet component that tell where the child component will render
         */}
        <Route path='/' element={<Layout></Layout>}>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/product' element={<FetchProduct></FetchProduct>}></Route>
        <Route path='/nameform' element={<NameForm></NameForm>}></Route>
        <Route path='/greet/:name' element={<Greet></Greet>}></Route>
        <Route path='/category/:category' element={<ProductByCat></ProductByCat>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
