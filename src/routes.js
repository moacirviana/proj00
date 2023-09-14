import Layout from 'components/Layout';
import Header from 'components/Layout/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from 'components/Login';
import NotFound from 'Pages/NotFound';
import TemplatePage from 'Pages/Template';
import ListarUsuarios from 'Pages/User';
import { AuthProvider } from 'context/AuthProvider';
import HomePage from 'Pages/Home';
import ListarProduto from 'Pages/produtos';
import ListarVendas from 'Pages/Vendas';
import GetBeanVenda from 'Pages/Vendas/view';

export default function AppRouter() {
  return (
    <AuthProvider>
      <main className='container-fluid'> 
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            
            <Route path='tabela' element={<TemplatePage />} />
            
            <Route path='login' element={<Login />} />

            <Route path='usuarios' element={<ListarUsuarios />} />

            <Route path='produtos' element={<ListarProduto />} />

            <Route path='vendas' element={<ListarVendas />} />

            <Route path="vendas/:id" element={<GetBeanVenda />} />
            
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
       </main> 
    </AuthProvider>
  );
}