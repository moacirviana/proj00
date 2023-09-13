import Layout from 'components/Layout';
import Header from 'components/Layout/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from 'components/Login';
import NotFound from 'Pages/NotFound';
import TemplatePage from 'Pages/Template';
import ListarUsuarios from 'Pages/User';
import { AuthProvider } from 'context/AuthProvider';
import HomePage from 'Pages/Home';

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
            
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
       </main> 
    </AuthProvider>
  );
}