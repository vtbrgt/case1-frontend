import React from 'react';
import Api from './API/Api.jsx';
import { Container } from 'react-bootstrap';
import Tabela from './Components/Tabela.jsx';

function App() {
  const [filmes, setFilmes] = React.useState(null);

  React.useEffect(() => {
    async function getFilmes() {
      await Api()
        .FILMES_GET()
        .then((res) => res.json())
        .then((data) => setFilmes(data));
    }

    getFilmes();
  }, []);

  return (
    <Container>
      <h1 align='center'>Lista de Filmes</h1>
      <Tabela itens={filmes}/>
    </Container>
  );
}

export default App;
