import React from 'react';
import Api from './API/Api.jsx';
import { Table, Container } from 'react-bootstrap';

function App() {
  const [filmes, setFilmes] = React.useState('');

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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Duração</th>
            <th>Gênero</th>
          </tr>
        </thead>

        <tbody>
          {filmes &&
            filmes.map((filme) => (
              <tr key={filme.id}>
                <td>{filme.titulo}</td>
                <td>{filme.duracao}</td>
                <td>{filme.genero}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
