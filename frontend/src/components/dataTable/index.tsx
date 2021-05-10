//sintaxe lambda

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SalePage } from 'types/seller';
import { formatLocalDate } from 'utils/format';
import { BASE_URL, PAGINATION } from 'utils/requests';
const DataTable = () => {


  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
    numberOfElements: 0
  });


  useEffect(() => {
    axios.get(`${BASE_URL}${PAGINATION}page=0&size=20`)
      .then(response => {

        setPage(response.data);

      })

  }, [])
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map(x => (

            <tr key={x.id}>
              <td>{x.date}</td>
              <td>{x.seller.name}</td>
              <td>{x.visited}</td>
              <td>{x.deals}</td>
              <td>{x.amount}</td>
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
