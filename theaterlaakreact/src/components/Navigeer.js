import { Link, useNavigate } from "react-router-dom";

export function useNavigeer(path) {
  const navigate = useNavigate();
  return navigate(path);
}
export default useNavigeer;
