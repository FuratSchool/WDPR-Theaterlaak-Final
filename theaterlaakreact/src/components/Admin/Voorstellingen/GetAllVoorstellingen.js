import React, { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
import axios from "axios";
import { Button } from "reactstrap";
import { API_BASE_URL } from '../../../apiConfig';

export function GetAllVoorstellingen() {
  const [voorstellingen, setVoorstellingen] = useState([]);
  const auth = useAuthUser();

  async function DeleteVoorstellingById(id) {
    try {
      const res = await axios.delete(
        `${API_BASE_URL}/api/Voorstelling/${id}`
      );
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
  const fetchData = () => {
    fetch(`${API_BASE_URL}/api/voorstelling`)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setVoorstellingen(data);
      });
  };
  useEffect(() => {
    fetchData();
    console.log(auth().Email);
  }, []);

  return (
    <div>
      {voorstellingen.length > 0 && (
        <ul class="list-group">
          {voorstellingen.map((voorstelling) => (
            <li
              key={voorstelling.voorstellingId}
              class="list-group-item d-flex justify-content-between align-items-start"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">{voorstelling.title}</div>
                {voorstelling.description}
              </div>
              <Button
                className="btn btn-danger"
                onClick={() =>
                  DeleteVoorstellingById(voorstelling.voorstellingId)
                }
              >
                Delete
              </Button>
              <button className="btn btn-success">Update</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GetAllVoorstellingen;
