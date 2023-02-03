import React, { useState, useEffect, useLayoutEffect } from "react";
import Rang from "./Rang";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { StoelReservatieContext } from "../stoelReservatieContext";
import { Button } from "reactstrap";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import { API_BASE_URL } from '../../apiConfig';
const StoelReservatie = () => {
  const [stoelen, setStoelen] = useState([]);
  const [idStoelen, setIdStoelen] = useState([]);
  const [voorstellingTitel, setVoorstellingTitel] = useState([]);
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  let { voorstellingId } = useParams();

  const authHeader = useAuthHeader();

  const jwtAuthenticationHeader = {
    headers: {
      Authorization: authHeader(),
    },
  };

  useLayoutEffect(() => {
    const maakReserveringenAan = async () => {
      try {
        await axios.get(
          `${API_BASE_URL}/maakReserveringBijVoorstelling/` +
            voorstellingId
        );
      } catch (err) {
        console.error("reserveringen zijn al gemaakt");
      }
    };
    maakReserveringenAan();
  }, []);

  useEffect(() => {
    const FetchBeschikbareStoelen = async () => {
      //get alle stoelen
      try {
        const response = await axios.get(
          `${API_BASE_URL}/beschikbarestoelen/` + voorstellingId
        );
        var rangen = [];
        for (let i = 0; i < response.data.length; i++) {
          let stoel = response.data[i];
          let rang = rangen.find(function (rang) {
            return rang.rangNr === stoel.rangNr;
          });
          if (!rang) {
            rang = {
              rangNr: stoel.rangNr,
              stoelen: [],
            };
            rangen.push(rang);
          }
          rang.stoelen.push(stoel);
        }

        setStoelen(rangen);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    const FetchVoorstellinginfo = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/voorstellinginfo/${voorstellingId}`
        );
        console.log(response.data);
        setVoorstellingTitel(String(response.data.map((item) => item.titel)));
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    const FetchLoggedUser = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/User/Account`,
          jwtAuthenticationHeader
        );
        console.log(response);
        setUser(response.data);
      } catch (err) {
        // Handle Error Here
        console.error("user niet ingelogd");
      }
    };

    FetchLoggedUser();
    FetchVoorstellinginfo();

    setInterval(() => {
      FetchBeschikbareStoelen();
    }, 1500);
  }, []);

  const putUserInReservering = async () => {
    var ps = [];

    idStoelen.forEach((e) => {
      var req = axios
        .get(
          `${API_BASE_URL}/toCart/` +
            String(voorstellingId) +
            "/" +
            String(e) +
            "/" +
            String(user.id)
        )
        .then(function (response) {
          ps.push(req);
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
    Promise.all(ps).then(console.log(ps));
    navigate("/Winkelwagen");
  };

  const stoelenLijst = stoelen.map((item, index) => (
    <div key={index}>
      <div className="h2">Rij nummer {item.rangNr}</div>
      <Rang propOne={item} />
    </div>
  ));

  return (
    <>
      <StoelReservatieContext.Provider value={{ idStoelen, setIdStoelen }}>
        <div className="row m-0 p-0">
          <div className="col-sm-6 m-0 p-0">{stoelenLijst}</div>
          <div className="col-sm-6  m-0 p-0">
            <div className="sticky-top mt-0">
              <h1>{voorstellingTitel}</h1>
              <img
                src="../images/card-img-1.jpg"
                className="card-custom card-img-top"
                alt="voorstelling naam"
              ></img>
              {/* <Button className="mt-2 col-12" color="success">
                Bestelling afronden
              </Button> */}
              <Button
                onClick={() => putUserInReservering()}
                className="mt-2 mb-5 col-6"
                color="success"
              >
                Afrekenen
              </Button>
            </div>
          </div>
        </div>
      </StoelReservatieContext.Provider>
    </>
  );
};

export default StoelReservatie;
