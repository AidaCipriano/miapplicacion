import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth } from "../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


function Navigation() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const endSession = (event) => {
    logout();
  }

  return (
    <Navbar sticky='top' variant='dark' expand="lg" style={{background: '#042326'}} >
      <Container fluid>
        <Navbar.Brand className='fs-3 px-3' style={{cursor:'pointer'}} onClick={()=>{navigate("/home/inicio", { replace: true });}}> eWork </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='me-auto fs-5'>
                <Nav.Link onClick={()=>{navigate("/home/inicio", { replace: true });}}>
                <i class="bi bi-house"></i> Inicio
                </Nav.Link>
                <Nav.Link onClick={()=>{navigate("/home/HomeChats", { replace: true });}}>
                <i class="bi bi-chat-dots "></i> Chat
                </Nav.Link>
          </Nav>
          <Nav className='fs-5'>
            <Nav.Item onClick={()=>signOut(auth)}>        
               Sign Out<i class="ps-2 bi bi-box-arrow-right"></i> 
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;