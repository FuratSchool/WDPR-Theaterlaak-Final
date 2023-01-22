import React, { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
export function GetAllVoorstellingen() {
  const [voorstellingen, setVoorstellingen] = useState([]);
  const auth = useAuthUser();
  const fetchData = () => {
    fetch("http://localhost:5044/api/voorstelling")
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
              key={voorstelling.id}
              class="list-group-item d-flex justify-content-between align-items-start"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">{voorstelling.title}</div>
                {voorstelling.description}
              </div>
              <button className="btn btn-danger">Delete</button>
              <button className="btn btn-success">Update</button>

              <div class="badge bg-success rounded-pill">Live</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GetAllVoorstellingen;
