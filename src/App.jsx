import React from 'react';
import Api from './API/Api.jsx';
import NovoFilme from './Components/NovoFilme.jsx';
import Tabela from './Components/Tabela.jsx';
import { Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [filmes, setFilmes] = React.useState(null);
  const [reload, setReload] = React.useState(false);

  async function getFilmes() {
    await Api()
      .FILMES_GET()
      .then((res) => res.json())
      .then((data) => setFilmes(data));
  }

  React.useEffect(() => {
    getFilmes();
  }, [reload]);

  return (
    <>
      <Container>
        <h1 align="center">Lista de Filmes</h1>
        <NovoFilme reload={reload} setReload={setReload} />
        <Tabela itens={filmes} reload={reload} setReload={setReload} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
}

export default App;
