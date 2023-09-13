import { Alert, Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container>
        <Alert key="danger" variant="danger">
          
               <h4>OPS página ou recurso não encontrado!!</h4>
        </Alert>
    </Container>
  )
}