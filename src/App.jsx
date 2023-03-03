import React from 'react';
import Api from './API/Api.js';
import NovoFilme from './Components/NovoFilme.jsx';
import Tabela from './Components/Tabela.jsx';
import Loading from './Components/Loading.jsx';
import { Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [filmes, setFilmes] = React.useState(null);
  const [reload, setReload] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const getFilmes = async () => {
    setLoading(true);
    try {
      await Api()
        .FILMES_GET()
        .then((res) => res.json())
        .then((data) => setFilmes(data));
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    getFilmes();
  }, [reload]);

  return (
    <>
      <Container>
        <h1 align="center">Lista de Filmes</h1>
        <NovoFilme reload={reload} setReload={setReload} />
        <Tabela itens={filmes} reload={reload} setReload={setReload} />
        {loading && <Loading />}
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
}

export default App;
