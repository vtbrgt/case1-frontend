import React from 'react'
import { Table } from 'react-bootstrap';

const Tabela = ({itens}) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Duração</th>
            <th>Gênero</th>
          </tr>
        </thead>

        <tbody>
          {itens &&
            itens.map((item) => (
              <tr key={item.id}>
                <td>{item.titulo}</td>
                <td>{item.duracao} min</td>
                <td>{item.genero}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  )
}

export default Tabela