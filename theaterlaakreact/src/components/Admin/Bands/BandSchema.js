import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/esm/Table";
import { Button } from "reactstrap";
import PaginationComponent from "../../Pagination";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from '../../../apiConfig';

function BandSchema() {
  const [succesdata, setsuccesdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useNavigate();

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = succesdata.slice(startIndex, endIndex);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/Groep`)

      .then((response) => {
        console.log(response);
        setsuccesdata(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function routeChange(path) {
    history(path);
  }

  return (
    <div>
      {currentData.map((s) => (
        <Table key={s.groepId}>
          <thead>
            <tr>
              <th>BandId</th>
              <th>BandNaam</th>
              <th>Artiesten</th>
              <th>Toevoegen</th>
              <th>Updaten</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{s.groepId}</td>
              <td>{s.groepNaam}</td>
              <td>{s.artiesten}</td>
              <td>
                <Button
                  className="btn btn-success"
                  onClick={() =>
                    routeChange(`/admin/band/adduser/${s.groepId}`)
                  }
                >
                  Add
                </Button>
              </td>
              <td>
                <Button
                  className="btn btn-warning  text-white"
                  onClick={() => routeChange(`/admin/band/update/${s.groepId}`)}
                >
                  Update
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}
      <PaginationComponent
        succesdata={succesdata}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default BandSchema;
