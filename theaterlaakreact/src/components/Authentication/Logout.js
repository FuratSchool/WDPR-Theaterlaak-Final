import React from "react";
import { useSignOut } from "react-auth-kit";
import { Button } from "reactstrap";

function Logout() {
  const signOut = useSignOut();
  return (
    <div>
      <Button
        color="outline-danger"
        style={{
          marginRight: 5,
        }}
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
}

export default Logout;
