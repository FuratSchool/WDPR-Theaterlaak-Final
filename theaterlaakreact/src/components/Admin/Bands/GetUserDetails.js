import { useAuthHeader, useAuthUser } from "react-auth-kit";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_BASE_URL } from '../../../apiConfig';


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
      .get(`${API_BASE_URL}/api/User/Account`, jwtAuthenticationHeader)
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
