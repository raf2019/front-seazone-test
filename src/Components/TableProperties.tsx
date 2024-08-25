import { useState } from 'react'

interface TableRow {
  id?: number,
  name: string,
  idade: number
}

function TableProperties() {
  const [tableContents, setTableContents] = useState<TableRow[]>([
    {
      "id": 1,
      "name": "Paulo",
      "idade": 30
    },
    {
      "id": 1,
      "name": "Paulo",
      "idade": 30
    }
  ])

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
    </>
  )
}

export default TableProperties