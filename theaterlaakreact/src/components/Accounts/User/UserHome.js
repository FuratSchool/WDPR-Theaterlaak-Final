import { React, useState } from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
import { SideNav } from "../../SideNav/SideNav";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import { API_BASE_URL } from '../../../apiConfig';

export function UserHome() {
  const [user, setUser] = useState({});
  const authHeader = useAuthHeader();
  const auth = useAuthUser();

  const [Email] = useState(auth().Email);

  const jwtAuthenticationHeader = {
    headers: {
      Authorization: authHeader(),
    },
  };

  useEffect(() => {
    console.log(Email);
    axios
      .get(`${API_BASE_URL}/api/User/Account`, jwtAuthenticationHeader)
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
  }, []);
  return (
    <div className="row">
      <SideNav />
      <div className="col-md-9">
        <form>
          <div className="row g-3">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  autoComplete="Voornaam"
                  aria-required="true"
                  placeholder="Voornaam"
                  defaultValue={user.voornaam}
                />
                <label htmlFor="Voornaam" className="form-label">
                  Voornaam
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  autoComplete="Achternaam"
                  aria-required="true"
                  placeholder="Achternaam"
                  defaultValue={user.achternaam}
                />
                <label htmlFor="Achternaam" className="form-label">
                  Achternaam
                </label>
              </div>
            </div>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              autoComplete="email"
              aria-required="true"
              placeholder="name@example.com"
              defaultValue={user.email}
            />
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <span htmlFor="Email" className="text-danger"></span>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  htmlFor="Password"
                  className="form-control"
                  placeholder="password"
                />
                <label htmlFor="Password">Password</label>
                <span htmlFor="Password" className="text-danger"></span>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  htmlFor="Password"
                  className="form-control"
                  placeholder="password"
                />
                <label htmlFor="Password">Password</label>
                <span htmlFor="Password" className="text-danger"></span>
              </div>
            </div>
          </div>
          <button
            id="Update"
            type="submit"
            className="w-100 btn btn-lg btn-success"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserHome;
