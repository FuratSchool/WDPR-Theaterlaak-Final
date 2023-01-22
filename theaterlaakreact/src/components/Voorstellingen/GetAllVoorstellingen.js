import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function GetAllVoorstellingen() {
  const [voorstellingen, setVoorstellingen] = useState([]);

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
  }, []);

  return (
    <div>
      {voorstellingen.length > 0 && (
        <div class="row">
          {voorstellingen.map((voorstelling) => (
            <div className="col-md-4">
              <div class="card card-custom card-border-gradient">
                <div class="card-image">
                  <img
                    src="../images/card-img-1.jpg"
                    class="card-custom card-img-top"
                  ></img>
                </div>
                <div class="container">
                  <div class="card-homepage">
                    <div class="row">
                      <div class="col-sm-4">
                        <p class="">21</p>
                      </div>
                      <div class="col-sm-4">
                        <p class="">12</p>
                      </div>
                      <div class="col-sm-4 darker-card">
                        <p class="">{2023}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title font-weight-light">
                    {voorstelling.title}
                  </h5>
                  <p>{voorstelling.description}</p>
                  <Link
                    type="button"
                    to={"/voorstelling"}
                    class="btn-custom btn btn-info btn-purple  float-end text-white"
                  >
                    Meer info
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GetAllVoorstellingen;
