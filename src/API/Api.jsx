const Api = () => {
  const url = 'https://lista-filmes.onrender.com';

  return {
    FILMES_GET() {
      return fetch(`${url}/filmes`);
    },
    FILME_POST(titulo, duracao, genero) {
      return fetch(`${url}/filme`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titulo,
          duracao,
          genero,
        }),
      }).then((res) => console.log(res.status));
    },
    FILME_PUT(titulo, duracao, genero, id) {
      return fetch(`${url}/filme`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titulo,
          duracao,
          genero,
          id,
        }),
      }).then((res) => console.log(res.status));
    },
    FILME_DELETE(id) {
      return fetch(`${url}/filme`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      }).then((res) => console.log(res.status));
    },
  };
};

export default Api;
