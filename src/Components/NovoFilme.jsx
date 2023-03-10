import React from 'react';
import Api from '../API/Api';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import styles from './NovoFilme.module.css';

const NovoFilme = ({ reload, setReload }) => {
  const [titulo, setTitulo] = React.useState('');
  const [duracao, setDuracao] = React.useState('');
  const [genero, setGenero] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log('Enviar filme: ', titulo, Number(duracao), genero);
    if (titulo && duracao && genero) {
      try {
        await Api().FILME_POST(titulo, Number(duracao), genero);
        setReload(!reload);
        toast.success('Filme cadastrado com sucesso!');
      } catch (err) {
        console.log(err.message);
        toast.error('Um erro ocorreu, tente novamente');
        throw new Error(err);
      } finally {
        setTitulo('');
        setDuracao('');
        setGenero('');
      }
    } else {
      toast.warn('Complete todos os dados para cadastrar um filme');
    }
  };

  return (
    <Form className={styles.formFilme} onSubmit={handleSubmit}>
      <Form.Group controlId="titulo">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
        />
      </Form.Group>

      <Form.Group controlId="duracao">
        <Form.Label>Duração (em minutos)</Form.Label>
        <Form.Control
          type="number"
          value={duracao}
          onChange={({ target }) => setDuracao(target.value)}
        />
      </Form.Group>

      <Form.Group controlId="genero">
        <Form.Label>Gênero</Form.Label>
        <Form.Control
          type="text"
          value={genero}
          onChange={({ target }) => setGenero(target.value)}
        />
      </Form.Group>

      <Button type="submit" variant="dark">
        Adicionar
      </Button>
    </Form>
  );
};

export default NovoFilme;
