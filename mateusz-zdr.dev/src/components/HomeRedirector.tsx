import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomeRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/omnie");
  }, [navigate]);

  return null;
}

export default HomeRedirect;
