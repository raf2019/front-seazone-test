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

interface TableRow {
  id?: number,
  name: string,
  idade: number
}

interface Headers {
  id?: number,
  text: string
}



function TableProperties() {
  const [tableContents, setTableContents] = useState<TableRow[]>([
    {
      "id": 1,
      "name": "Paulo",
      "idade": 30
    },
    {
      "id": 2,
      "name": "Artur",
      "idade": 20
    },
    {
      "id": 3,
      "name": "Alice",
      "idade": 10
    }
  ])
  const [tableRows, setTableRows] = useState<ITableRow[]>(properties_rows)
  const [inputSearchTable, setInputSearchTable] = useState<string>('')
  // const handleSearchTable = () => setTableRows(tableRows.filter((tableRow) => tableRow.imovel_numero === inputSearchTable))
  const handleSearchTableOnChange = (eventValue) => {
    if (eventValue.length === 0) {
      setTableRows(properties_rows);
    } else {
      setTableRows(tableRows.filter((tableRow) => tableRow.imovel_numero === eventValue))
    }
  }
  // const handleInput = (userInput) => {setInputSearchTable}

  return (
    <>
      <div>Table to show:</div>
      {/* <div>{ tableContents }</div> */}
      <ul>
        {tableContents.map((row) => (
          <li key={row.id}>
            <h3>{row.name}</h3>
            <p>{row.idade}</p>
          </li>
        ))}
      </ul>
      <div>
        <h3>Field to search:</h3>
        <Form.Label htmlFor="inputSearch">Busca</Form.Label>
          <Form.Control
            type="text"
            id="inputSearch"
          aria-describedby="inputFromUserToSearchOnTable"
          // onChange={(event) => setInputSearchTable(event.target.value)}
          onChange={(event) => handleSearchTableOnChange(event.target.value)}
          />
          <Form.Text id="inputFromUserToSearchOnTable" muted>
            Busque por imóvel, categoria ou status
          </Form.Text>
        <h1>Table from React Bootstrap:</h1>
        <Table responsive>
          <thead>
            <tr>
              {/* <th>#</th> */}
              {properties_headers.map((row: Headers) => (
                <th key={row.id}>{row.text}</th>
              ))}
              {/* {Array.from({ length: 12 }).map((_, index) => (
                <th key={index}>Table heading</th>
              ))} */}
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
          {/* <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
          </tbody> */}
        </Table>
      </div>

    </>
  )
}

export default TableProperties