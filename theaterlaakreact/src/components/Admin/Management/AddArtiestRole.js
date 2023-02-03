import FormSelect from "react-bootstrap/esm/FormSelect";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label } from "reactstrap";
import { API_BASE_URL } from "../../../apiConfig";
import { useNavigate } from "react-router-dom";

export function AddArtiestRole() {
  const [userEmail, setUserEmail] = useState();
  const [userRole, setUserRole] = useState();
  const navigate = useNavigate();
  const [succesdata, setsuccesdata] = useState([]);

  const authHeader = useAuthHeader();

  const jwtAuthenticationHeader = {
    headers: {
      Authorization: authHeader(),
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5044/api/User/AddArtiestRole`,
        {
          Email: userEmail,
          Role: userRole,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      navigate("/admin/voorstellingen");
    } catch (error) {
      console.log(userRole);

      console.error(error);
    }
  };

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/User`, jwtAuthenticationHeader)

      .then((response) => {
        console.log(response);
        setsuccesdata(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup>
        <Label>User Email</Label>
        <FormSelect onChange={(e) => setUserEmail(e.target.value)}>
          {succesdata.map((s) => (
            <option key={s.id}>{s.email}</option>
          ))}
          <option></option>
        </FormSelect>
      </FormGroup>
      <FormGroup>
        <Label>Preferred Role</Label>
        <FormSelect onChange={(e) => setUserRole(e.target.value)}>
          <option>Artiest</option>
        </FormSelect>
      </FormGroup>
      <Button type="submit" className="btn btn-success">
        Grant Role
      </Button>
    </Form>
  );
}

export default AddArtiestRole;
