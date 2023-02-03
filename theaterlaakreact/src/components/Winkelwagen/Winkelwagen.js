import React, {
  createContext,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Reserveren } from "./Reserveren";
import Ww from "./ww";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import Afrekenen from "../Afrekenen";
import { API_BASE_URL } from '../../apiConfig';

export const Winkelwagen = (args, { cart }) => {
  const [user, setUser] = useState([]);
  const authHeader = useAuthHeader();
  const [winkelwagen, setWinkelwagen] = useState([]);
  const [Totaalprijs, setTotaalprijs] = useState(0);

  const jwtAuthenticationHeader = {
    headers: {
      Authorization: authHeader(),
    },
  }

  useLayoutEffect(()=>{
    const fetchWinkelwagen = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/getReservering/` + user
        );
        console.log(response);
        setWinkelwagen(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchWinkelwagen()
  })
  

  useEffect(() => {
    const FetchLoggedUser = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/User/Account`,
          jwtAuthenticationHeader
        );
        console.log(response);
        setUser(response.data.id);
      } catch (err) {
        console.error(err);
      }}


      FetchLoggedUser();
      
      

;
  }, [user]);

  useEffect(() => {
    setTotaalprijs(winkelwagen.reduce((acc, item) => acc + item.prijs, 0));
  }, [winkelwagen]);
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
            ", Stoel nummer " +
            item.stoelNr +
            ", €" +
            item.prijs}
        </div>
      ))}
      {"De totaalprijs is = €" + Totaalprijs}
      <Afrekenen propPrijs={Totaalprijs} />
    </>
  );
}


export default Winkelwagen;
