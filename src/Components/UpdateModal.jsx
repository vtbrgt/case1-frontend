import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const UpdateModal = ({isModalOpen, handleClose, selectedContent}) => {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={isModalOpen}>
        <Form onSubmit={(event) => {
          props.updateContent(event)
        }}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Atualizar Conteúdo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="titulo">
            <Form.Label>
              Título
            </Form.Label>
            <Form.Control defaultValue={selectedContent.titulo} type="text" />
          </Form.Group>

          <Form.Group controlId="duracao">
            <Form.Label>
              Duração
            </Form.Label>
            <Form.Control defaultValue={selectedContent.duracao} type="number" />
          </Form.Group>

          <Form.Group controlId="genero">
            <Form.Label>
              Gênero
            </Form.Label>
            <Form.Control defaultValue={selectedContent.genero} type="text" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" type="submit">Salvar</Button>
        </Modal.Footer>
        </Form>
      </Modal >
    </div> 
  )
}

export default UpdateModal