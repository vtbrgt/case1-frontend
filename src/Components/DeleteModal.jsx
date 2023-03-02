import React from 'react';
import Api from '../API/Api';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const DeleteModal = ({isModalOpen, setModalOpen, handleClose, selectedContent, reload, setReload}) => {
  async function handleDelete() {
    try {
      await Api().FILME_DELETE(selectedContent.id);
      setReload(!reload);
      toast.success('Filme excluído com sucesso!');
    } catch (err) {
      console.log(err.message);
      toast.error('Um erro ocorreu, tente novamente');
      throw new Error(err);
    } finally {
      setModalOpen(false);
    }
  }

  return (
    <div className='modal show' style={{display: 'block', position: 'initial'}}>
      <Modal show={isModalOpen}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Deletar Filme</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Deseja mesmo deletar o filme "<b>{selectedContent.titulo}</b>"?</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancelar
            </Button>
            <Button variant="dark" onClick={handleDelete}>
              Deletar
            </Button>
          </Modal.Footer>
      </Modal>
    </div>
  )
}

export default DeleteModal