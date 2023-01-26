import { useAuthHeader, useAuthUser } from "react-auth-kit";
import axios from "axios";
import { useState, useEffect } from "react";

function GetUserDetails() {
  const [UID, setUID] = useState();

  const authHeader = useAuthHeader();

  const jwtAuthenticationHeader = {
    headers: {
      Authorization: authHeader(),
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:5044/api/User/Account", jwtAuthenticationHeader)
      .catch((err) => {
        console.log(err);
      })
      .then(function (response) {
        setUID(response.data.id);

        return response;
      })
      .then((result) => {
        if (result.status == 200) {
          setUID(result.data.id);
        }
      });
  }, []);

  return UID;
}
export default GetUserDetails;
