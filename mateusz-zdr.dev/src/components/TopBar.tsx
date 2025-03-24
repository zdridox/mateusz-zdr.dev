import { useNavigate, useLocation } from "react-router-dom";

function Bar() {
  const navigate = useNavigate();

  const location = useLocation();
  return (
    <>
      <div style={{ paddingTop: "5px" }}>
        {" "}
        <button
          className="btn btn-success btn-sm"
          onClick={() => navigate("/omnie")}
        >
          {location.pathname === "/omnie" ? (
            <div
              style={{
                borderBottom: "1px dashed black ",
                borderRadius: "5px",
                color: "black",
              }}
            >
              O mnie
            </div>
          ) : (
            <div style={{ color: "black" }}> O mnie</div>
          )}
        </button>
        <button
          className="btn btn-warning btn-sm mx-2"
          onClick={() => navigate("/projekty")}
        >
          {location.pathname === "/projekty" ? (
            <div
              style={{
                borderBottom: "1px dashed black ",
                borderRadius: "5px",
                color: "black",
              }}
            >
              Projekty
            </div>
          ) : (
            <div style={{ color: "black" }}> Projekty</div>
          )}
        </button>
        <button
          className="btn btn-info btn-sm"
          onClick={() => navigate("/kontakt")}
        >
          {location.pathname === "/kontakt" ? (
            <div
              style={{
                borderBottom: "1px dashed black ",
                borderRadius: "5px",
                color: "black",
              }}
            >
              Kontakt
            </div>
          ) : (
            <div style={{ color: "black" }}> Kontakt</div>
          )}
        </button>
      </div>
    </>
  );
}
export default Bar;
