import { useNavigate } from "@reach/router";

function NavigateTo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/overzicht");
  };

  return (
    <div>
      <button onClick={handleClick}>Go to Destination</button>
    </div>
  );
}
