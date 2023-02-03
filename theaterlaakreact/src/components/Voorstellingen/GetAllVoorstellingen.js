import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaginationComponent from "../Pagination";
import { API_BASE_URL } from '../../apiConfig';

export function GetAllVoorstellingen() {
  const [voorstellingen, setVoorstellingen] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVoorstellingen = voorstellingen.slice(startIndex, endIndex);

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
  }, []);

  return (
    <div>
      {voorstellingen.length > 0 && (
        <div class="row">
          {currentVoorstellingen.map((voorstelling) => (
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
                    to={"/StoelReservatie/" + voorstelling.voorstellingId}
                    class="btn-custom btn btn-info btn-purple  float-end text-white"
                  >
                    bestel ticket
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <PaginationComponent
        succesdata={voorstellingen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
export default GetAllVoorstellingen;
