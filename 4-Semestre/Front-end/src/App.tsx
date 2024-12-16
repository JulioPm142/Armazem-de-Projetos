import Login from './pages/login';
import Estacoes from './pages/Estacoes';
import Info from './pages/informacoes';
import Alertas from './pages/Alertas';
import Gerenciamento from './pages/Gerenciamento';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Provider } from './contexts/LoginContexts';
import useLogin from './hooks';
import Dashboard from './pages/Dashboards';

function App() {
  return (
    <Provider>
      <Rotas />
    </Provider>
  );
}
function Rotas() {
  const { token } = useLogin();
  return (
    <BrowserRouter>
      {token ? <RotaLogado /> : <RotaPublico />}
    </BrowserRouter>
  )
}

function RotaLogado() {
  return (
    <Routes>
      <Route path='*'element={<Estacoes />} />
      <Route path="/estacoes" element={<Estacoes />} />
      <Route path="/informacoes" element={<Info />} />
      <Route path="/alertas" element={<Alertas />} />
      <Route path="/gerenciamento" element={<Gerenciamento />} />
      <Route path="/dashboards" element={<Dashboard />} />
    </Routes>
  )
}

function RotaPublico() {
  return (
    <Routes>
      <Route path='*'element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="/estacoes" element={<Estacoes />} />
      <Route path="/informacoes" element={<Info />} />
      <Route path="/alertas" element={<Alertas />} />
      <Route path="/dashboards" element={<Dashboard />} />
    </Routes>
  )
}


export default App;