import React from 'react';
import Api from './API/Api.jsx';

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

  return <div></div>;
}

export default App;
