import { useEffect, useState } from 'react';
import LoadingSpinner from 'components/LoadingSpinner';
import { Container, Row, Table } from "react-bootstrap"
import { useParams } from 'react-router-dom';
import { IVenda } from 'interface/IVenda';
import { Api } from 'service/api';

const GetBeanVenda = () => {
    const param = useParams()
    const[venda, setVenda] = useState<IVenda>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        Api.get<IVenda>(`vendas/${param.id}`)
           .then(resposta => {
             setVenda(resposta.data);
             setIsLoading(false);
           })
           
        .catch(erro => {
            console.log(erro);
        })
        },[param])

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
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{venda?.id}</td>
                <td>{venda?.date}</td>
                <td>{venda?.itens.map((it, key) => 
                    <p key={key}>{it.produto.descricao} {it.valor} </p>
                   )}</td>
                <td>{venda?.valorTotal}</td>
              </tr>  
          </tbody>
        </Table>
        </Row> 
    </Container>
   </>  
  )
}

export default GetBeanVenda;
