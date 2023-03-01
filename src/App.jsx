import React from 'react';
import Api from './API/Api.jsx';
import { Container } from 'react-bootstrap';
import Tabela from './Components/Tabela.jsx';
import NovoFilme from './Components/NovoFilme.jsx';

function App() {
  const [filmes, setFilmes] = React.useState(null);
  const [reload, setReload] = React.useState(false)

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
    <Container>
      <h1 align='center'>Lista de Filmes</h1>
      <NovoFilme reload={reload} setReload={setReload}/>
      <Tabela itens={filmes}/>
    </Container>
  );
}

export default App;
