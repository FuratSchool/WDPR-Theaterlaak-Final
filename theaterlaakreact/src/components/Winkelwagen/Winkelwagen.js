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
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    // var requestRoute = "http://localhost:5044/getReservering/" + user;
    console.log(user);

    const fetchWinkelwagen = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5044/getReservering/" + user
        );
        console.log(response);
        setWinkelwagen(response.data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    FetchLoggedUser();
    fetchWinkelwagen();
  }, []);

  const [reservaties, setReservaties] = useState([]);
  function handleAddreservatie(reservatie) {
    setReservaties([...reservaties, reservatie]);
  }
  return (
    <>
      <h1>Uw Winkelwagen</h1>
      {JSON.stringify(winkelwagen)}
    </>
  );
};

export default Winkelwagen;
