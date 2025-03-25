import { useNavigate, useLocation } from "react-router-dom";

function Bar() {
  const navigate = useNavigate();

  const location = useLocation();
  return (
    <>
      <div
        style={{ paddingTop: "5px", textAlign: "center" }}
        className="space-grotesk"
      >
        <button
          className="btn btn-success btn-sm"
          style={{ backgroundColor: "#147d26", border: "0px" }}
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
          className="btn btn-success btn-sm mx-2"
          style={{ backgroundColor: "#4f558c", border: "0px" }}
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
          className="btn btn-success btn-sm"
          style={{ backgroundColor: "#2fb5b1", border: "0px" }}
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
