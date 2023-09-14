import { UserAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, ChangeEvent } from "react";
import { toast } from 'react-toastify';

function Login () {
// eve.holt@reqres.in   cityslicka
  const auth = UserAuth();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    // 👇 Store the input value to local state
    setEmail(e.target.value);
  };

  const handlePasswd = (e: ChangeEvent<HTMLInputElement>) => {
    // 👇 Store the input value to local state
    setPassword(e.target.value);
  };
  

  const handleSubmit = (e : React.SyntheticEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
      e.preventDefault();
      e.stopPropagation();
    if (form.checkValidity() === false) {
      toast.error('Verifique os campos obrigatórios');
    }else{
      
      onFinish({email, password});
    }
    setValidated(true);
  }; 

  async function onFinish(values: {email:string, password:string}) {
    try {
      await auth.authenticate(values.email, values.password);
      navigate('/vendas');
      //Change history.replace('/path') with navigate('/path', { replace: true })
    } catch (error) {
      toast.error('Ocorreu um erro: ' + error);
    }
  }
  return(
    <Container>
    <Row className='mt-2'>
     <Col></Col>
      <Col>
        <Card>
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="tituloeleitor">
                    <Form.Label>Título Eleitor</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleEmail} value={email} placeholder="título eleitor" required/>
                    <Form.Text className="text-muted">
                       Não compartilhe seu login com ninguém.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Informe o título de eleitor
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="senha">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" name="password" onChange={handlePasswd} value={password} placeholder="senha" required/>
                    <Form.Control.Feedback type="invalid">
                        Informe a senha
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </Card.Body>   
        </Card>   
        </Col>
        <Col></Col>
      </Row>
    
   </Container>

   
   
    );
}

export default Login;