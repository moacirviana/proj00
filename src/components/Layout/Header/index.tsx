import { UserAuth } from 'context/AuthProvider/useAuth';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const auth = UserAuth();
  const navigate = useNavigate();
 const logout = () => {
    auth.logout();
    navigate('/login');
    
 };

    return (
      <>
        <div className="container">
            <img src={process.env.PUBLIC_URL + '/topo_padrao.png'} alt="Imagem topo"/>
        </div>

        <Navbar expand="lg" className="navbar navbar-dark mb-3">
        <Container>
          <Navbar.Brand href="#">
              <LinkContainer to="/">
                  <Nav.Link href="#ze">Home</Nav.Link>
              </LinkContainer >
           </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <LinkContainer to="/vendas">
                  <Nav.Link href="#ze">Vendas</Nav.Link>
              </LinkContainer >
              
              <LinkContainer to="/produtos">
                  <Nav.Link href="#ze">Produtos</Nav.Link>
              </LinkContainer >

               <LinkContainer to="/usuarios">
                  <Nav.Link href="#ze">Usuarios</Nav.Link>
              </LinkContainer >
              
              <LinkContainer to="/tabela">
                   <Nav.Link href="#link">Tabelas</Nav.Link>
              </LinkContainer>
              
              <NavDropdown title="Eleição" id="basic-nav-dropdown">
                  
                  <LinkContainer to="/situacaoSecoes">
                     <NavDropdown.Item href="#action/3.1">Situação das Seções</NavDropdown.Item>
                  </LinkContainer >

                  <LinkContainer to="/resumoRecebimentoCap">
                    <NavDropdown.Item href="#action/3.2">
                      Recebimento Capital
                    </NavDropdown.Item>
                    </LinkContainer >
                    <LinkContainer to="/ultiSecTransmitidaINT">
                    <NavDropdown.Item href="#action/3.5">
                      Ultimas Seções Transmitidas Interior
                    </NavDropdown.Item>
                    </LinkContainer >    
                    
                    <NavDropdown.Item href="#action/3.3">Recebimento Interior</NavDropdown.Item>
                    
                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action/3.4">Seções Não Recebidas</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
            { auth.token ? 
               <Nav.Link href="#link" onClick={logout}>Logout</Nav.Link>
             : 
               <LinkContainer to="/login">
                   <Nav.Link href="#logout">Login  </Nav.Link>
               </LinkContainer >
               
            }
                
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    )
  }