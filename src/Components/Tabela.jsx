import React from 'react';
import UpdateModal from './UpdateModal.jsx';
import DeleteModal from './DeleteModal.jsx';
import { Table } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';
import styles from './Tabela.module.css';

const Tabela = ({ itens, reload, setReload }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [selectedContent, setSelectedContent] = React.useState('');

  const handleShowUpdateModal = (item) => {
    setIsUpdateModalOpen(true);
    setSelectedContent({
      titulo: item.titulo,
      duracao: item.duracao,
      genero: item.genero,
      id: item.id,
    });
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setSelectedContent('');
  };

  const handleShowDeleteModal = (item) => {
    setIsDeleteModalOpen(true);
    setSelectedContent({
      titulo: item.titulo,
      id: item.id,
    });
  };
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedContent('');
  };

  return (
    <>
      <Table striped bordered hover style={styles.tableMain}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Duração</th>
            <th>Gênero</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {itens &&
            itens.map((item) => (
              <tr key={item.id}>
                <td className="titulo">{item.titulo}</td>
                <td className="duracao">{item.duracao} min</td>
                <td className="genero">{item.genero}</td>
                <td align="center">
                  <FaEdit onClick={() => handleShowUpdateModal(item)} />
                </td>
                <td align="center">
                  <FaTrash onClick={() => handleShowDeleteModal(item)} />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {selectedContent && (
        <UpdateModal
          isModalOpen={isUpdateModalOpen}
          setModalOpen={setIsUpdateModalOpen}
          handleClose={handleCloseUpdateModal}
          selectedContent={selectedContent}
          reload={reload}
          setReload={setReload}
        />
      )}
      {selectedContent && (
        <DeleteModal
          isModalOpen={isDeleteModalOpen}
          setModalOpen={setIsDeleteModalOpen}
          handleClose={handleCloseDeleteModal}
          selectedContent={selectedContent}
          reload={reload}
          setReload={setReload}
        />
      )}
    </>
  );
};

export default Tabela;
