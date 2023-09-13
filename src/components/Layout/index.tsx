import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const PageDefault = () => {
 
 return (
   <Container fluid>
      <Outlet />
      <Footer />
   </Container>   
  );
}

export default PageDefault;
