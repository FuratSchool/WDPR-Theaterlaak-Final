import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Reserveren } from "./Reserveren";
import Ww from "./ww";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";

export const Winkelwagen = (args, { cart }) => {
  const [user, setUser] = useState([]);
  const authHeader = useAuthHeader();
  const [winkelwagen, setWinkelwagen] = useState([]);
  const [totPrijs, setTotPrijs] = useState(0);

  const jwtAuthenticationHeader = {
    headers: {
      Authorization: authHeader(),
    },
  };

  useEffect(() => {
    const FetchLoggedUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5044/api/User/Account",
          jwtAuthenticationHeader
        );
        console.log(response);
        setUser(response.data.id);
        const fetchWinkelwagen = async () => {
          try {
            const response = await axios.get(
              "http://localhost:5044/getReservering/" + user
            );
            console.log(response);
            setWinkelwagen(response.data);
          } catch (err) {
            console.error(err);
          }
        };
        fetchWinkelwagen();
      } catch (err) {
        console.error(err);
      }
    };
    FetchLoggedUser();
  }, [user]);

  // const TotaalPrijs = winkelwagen.prijs.reduce(
  //   (eersteprijs, currentprijs, index) => eersteprijs + currentprijs,
  //   0
  // );
  // console.log(TotaalPrijs);

  return (
    <>
      <h1>Uw Winkelwagen</h1>
      {/* {JSON.stringify(winkelwagen)} */}

      {winkelwagen.map((item, index) => (
        <div key={index}>
          {"Voorstelling " +
            item.voorstelling +
            " Stoel nummer " +
            item.stoelNr +
            ", €" +
            item.prijs}
        </div>
      ))}
      {totPrijs}
    </>
  );
};

export default Winkelwagen;
