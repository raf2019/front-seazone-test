import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import {properties_headers, properties_rows} from '../Mocks/properties.js'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';


interface ITableRow {
  id?: number,
  imovel_id: number,
  imovel_numero: string,
  imovel_categoria: string,
  imovel_status: string,
  imovel_contrato_inicio: string,
  imovel_proprietario: string,
  imovel_telefone_proprietario: string,
  imovel_endereco: string
}

interface Headers {
  id?: number,
  text: string
}

export const TableProperties = () => {
  const [tableRows, setTableRows] = useState<ITableRow[]>(properties_rows)
  const handleSearchTableOnChange = (eventValue: string) => {
    if (eventValue.length === 0) {
      setTableRows(properties_rows);
    } else {
      setTableRows(tableRows.filter((tableRow) => {
        return Object.values(tableRow).some(valor => {
          return valor && valor.toString().toLowerCase().includes(eventValue.toLowerCase())
        })
      }))
    }
  }

  return (
    <>
      <div>
        <Form.Label htmlFor="inputSearch">Busca</Form.Label>
          <Form.Control
            type="text"
            id="inputSearch"
          aria-describedby="inputFromUserToSearchOnTable"
          onChange={(event) => handleSearchTableOnChange(event.target.value)}
          />
          <Form.Text id="inputFromUserToSearchOnTable" muted>
            Busque por imóvel, categoria ou status
          </Form.Text>
        <h1>Table from React Bootstrap:</h1>
        <Table responsive>
          <thead>
            <tr>
              {properties_headers.map((row: Headers) => (
                <th key={row.id}>{row.text}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <tr key={row.id}>
                <td>{row.imovel_id}</td>
                <td>{row.imovel_numero}</td>
                <td>{row.imovel_categoria}</td>
                <td>{row.imovel_status}</td>
                <td>{row.imovel_contrato_inicio}</td>
                <td>{row.imovel_proprietario}</td>
                <td>{row.imovel_telefone_proprietario}</td>
                <td>{row.imovel_endereco}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

    </>
  )
}