import { useEffect, useState } from 'react';
import { Api } from '../../service/api';
import IUsersreqres from 'interface/IUsersreqres';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import LoadingSpinner from 'components/LoadingSpinner';


const ListarUsuarios = () => {
    const[usuario, setUsuario] = useState<IUsersreqres>();
    const [isLoading, setIsLoading] = useState(false);
    
  useEffect(()=>{
    setIsLoading(true);
    Api.get<IUsersreqres>(`users?page=1`)
       .then(resposta => {
         setUsuario(resposta.data);
         setIsLoading(false);
       })
       
    .catch(erro => {
        console.log(erro);
    })
    },[])

  return (
    <>
    
    {isLoading ? <LoadingSpinner /> : ""}
    <Container>
      <Row>
      {
       usuario?.data.map( (obj,key) =>
        <Col>
           <Card style={{ width: '10rem' }}>
              
              <Image src={obj.avatar} roundedCircle />
              <Card.Body className="text-center">
                <Card.Title>{obj.first_name}</Card.Title>
                <Card.Text>
                    {obj.email}
                </Card.Text>
              </Card.Body>
              
              <Card.Body className="text-center">
                <Card.Link href={'mailto:'+obj.email}>Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
         ) 
        }  
      </Row>
    </Container>

    </>
  )
}

export default ListarUsuarios;