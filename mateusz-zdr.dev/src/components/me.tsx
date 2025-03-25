import myImage from "../assets/images/me.webp";
import { Card, Alert } from "react-bootstrap";
import { useEffect } from "react";

function MyFace() {
  useEffect(() => {
    document.title = "O mnie | Mateusz Zdrodowski";
  }, []);
  return (
    <>
      <div className="mx-auto row justify-content-center">
        <Card
          className=" col-10 col-md-8 col-lg-6 col-xl-3 mt-5 mx-2"
          style={{
            backgroundColor: "#3A3D2D",
            color: "white",
            borderColor: "#1e3619",
            boxShadow: "1px 1px 10px #8cd498 inset",
          }}
        >
          <Card.Body>
            <Card.Img src={myImage} />
            <Card.Title className="text-center space-grotesk">
              Mateusz Zdrodowski
            </Card.Title>
            <Card.Text className="text-center space-grotesk">
              Deweloper gier wideo.
            </Card.Text>
          </Card.Body>
        </Card>

        <Alert
          className="col-10 col-md-8 col-lg-7 col-xl-4 mt-5 mx-2 align-self-start"
          style={{
            backgroundColor: "#3A3D2D",
            color: "white",
            borderColor: "#1e3619",
            boxShadow: "1px 1px 10px #8cd498 inset",
          }}
        >
          <div className="space-grotesk">
            Cześć! Nazywam się Mateusz i zajmuję się programowaniem gier wideo.
            Moim głównym narzędziem pracy jest silnik Unity oraz język C#.
            Tworzenie gier to moja pasja i kierunek, w którym chcę rozwijać
            swoją przyszłość zawodową. Aktualnie uczę się w Liceum Kreacji Gier
            Wideo (LKGW), gdzie stale poszerzam swoją wiedzę i umiejętności.
            Poza programowaniem gier interesuję się również tematyką serwerów —
            posiadam własny serwer działający na wirtualizacji. Fascynują mnie
            także mikrokontrolery, druk 3D, jazda na deskorolce oraz szeroko
            pojęte programowanie
          </div>
        </Alert>
      </div>
    </>
  );
}
export default MyFace;
