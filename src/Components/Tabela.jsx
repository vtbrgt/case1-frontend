import React from 'react'
import { Table } from 'react-bootstrap';
import { FaTrash, FaEdit } from "react-icons/fa";
import styles from './Tabela.module.css'
import UpdateModal from './UpdateModal.jsx';

const Tabela = ({itens}) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = React.useState(false)
  const [selectedContent, setSelectedContent] = React.useState('')

  const handleShowUpdateModal = ({target}) => {
    setIsUpdateModalOpen(true);
    //melhorar forma de pegar os itens
    // setSelectedContent({
    //   titulo: target.parentElement.parentElement.querySelector('.titulo').textContent,
    //   duracao: target.parentElement.parentElement.querySelector('.duracao').textContent,
    //   genero: target.parentElement.parentElement.querySelector('.genero').textContent
    // })
    console.log(target.parentElement);
  }
  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setSelectedContent('')
  }

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
                <td className='titulo'>{item.titulo}</td>
                <td className='duracao'>{item.duracao} min</td>
                <td className='genero'>{item.genero}</td>
                {/* trocar svg por imagem? */}
                <td align='center'><i onClick={(event) => handleShowUpdateModal(event)}><FaEdit/></i></td>
                <td align='center'><FaTrash/></td>
              </tr>
            ))}
        </tbody>
      </Table>
      {selectedContent && (
        <UpdateModal isModalOpen={isUpdateModalOpen} handleClose={handleCloseUpdateModal} selectedContent={selectedContent} />
      )}
    </>
  )
}

export default Tabela