import { useEffect, useState } from 'react';
import { Api } from '../../service/api';
import { Container, Row, Table } from "react-bootstrap"
import LoadingSpinner from 'components/LoadingSpinner';
import { IVenda } from 'interface/IVenda';
import { Link } from 'react-router-dom';


const ListarVendas = () => {
    const[venda, setVendas] = useState<IVenda[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    
  useEffect(()=>{
    setIsLoading(true);
    Api.get<IVenda[]>(`vendas`)
       .then(resposta => {
         setVendas(resposta.data);
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
              <th>Data</th>
              <th>Itens</th>
              <th>ValorTotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {
            venda?.map( (obj,key) =>
              <tr key={key}>
                <td>{obj.id}</td>
                <td>{obj.date}</td>
                <td>{obj.itens.map((it, key) => 
                    <p key={key}>{it.produto.descricao} {it.valor} </p>
                   )}</td>
                <td>{obj.valorTotal}</td>
                <td><Link to={`/vendas/${obj.id}`} >ver</Link></td>
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
export default ListarVendas;