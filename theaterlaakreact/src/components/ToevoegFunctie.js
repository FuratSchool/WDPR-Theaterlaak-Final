import { useAuthHeader, useAuthUser } from "react-auth-kit";
import axios from "axios";
import { useState } from "react";

function ToevoegFunctie(){

    const [user, setUser] = useState({});
    const authHeader = useAuthHeader();
    const auth = useAuthUser();
    
    const [Email] = useState(auth().Email);

    const jwtAuthenticationHeader = {
        headers: {
          Authorization: authHeader(),
        },
      };
    

        axios
          .get("http://localhost:5044/api/User/Account", jwtAuthenticationHeader)
          .catch((err) => {
            console.log(err);
          })
          .then(function (response) {
            setUser(response.data);
            console.log(user);
            return response;
          })
          .then((result) => {
            if (result.status == 200) {
              setUser(result.data);
             
            }
          });
          return (user);

} export default ToevoegFunctie