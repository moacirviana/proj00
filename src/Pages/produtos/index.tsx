import { useEffect, useState } from 'react';
import { Api } from '../../service/api';
import { Container, Row, Table } from "react-bootstrap"
import LoadingSpinner from 'components/LoadingSpinner';
import { IProduto } from 'interface/IProduto';


const ListarProduto = () => {
    const[produto, setProduto] = useState<IProduto[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    
  useEffect(()=>{
    setIsLoading(true);
    Api.get<IProduto[]>(`produtos`)
       .then(resposta => {
         setProduto(resposta.data);
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Descricao</th>
              <th>Itens</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
          {
            produto?.map( (obj,key) =>
              <tr key={key}>
                <td>{obj.id}</td>
                <td>{obj.descricao}</td>
                <td>{obj.valor}</td>
              </tr>
             )
           }
          </tbody>
        </Table>
        </Row> 
    </Container>
   </>  
  )
}
export default ListarProduto;