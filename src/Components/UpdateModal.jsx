import React from 'react';
import Api from '../API/Api';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const UpdateModal = ({
  isModalOpen,
  setModalOpen,
  handleClose,
  selectedContent,
  reload,
  setReload,
}) => {
  const [titulo, setTitulo] = React.useState('');
  const [duracao, setDuracao] = React.useState('');
  const [genero, setGenero] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (titulo && duracao && genero) {
      try {
        await Api().FILME_PUT(
          titulo,
          Number(duracao),
          genero,
          selectedContent.id
        );
        setReload(!reload);
        toast.success('Filme atualizado com sucesso!');
      } catch (err) {
        console.log(err.message);
        toast.error('Um erro ocorreu, tente novamente');
        throw new Error(err);
      } finally {
        setModalOpen(false);
        setTitulo('');
        setDuracao('');
        setGenero('');
      }
    } else {
      toast.warn('Complete todos os dados para atualizar um filme');
    }
  }

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={isModalOpen}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>Atualizar Conteúdo</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group controlId="titulo">
              <Form.Label>Título</Form.Label>
              <Form.Control
                placeholder={selectedContent.titulo}
                type="text"
                value={titulo}
                onChange={({ target }) => setTitulo(target.value)}
              />
            </Form.Group>

            <Form.Group controlId="duracao">
              <Form.Label>Duração</Form.Label>
              <Form.Control
                placeholder={selectedContent.duracao}
                type="number"
                value={duracao}
                onChange={({ target }) => setDuracao(target.value)}
              />
            </Form.Group>

            <Form.Group controlId="genero">
              <Form.Label>Gênero</Form.Label>
              <Form.Control
                placeholder={selectedContent.genero}
                type="text"
                value={genero}
                onChange={({ target }) => setGenero(target.value)}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Close
            </Button>
            <Button variant="dark" type="submit">
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateModal;
