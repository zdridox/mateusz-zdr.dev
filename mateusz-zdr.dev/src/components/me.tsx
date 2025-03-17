import myImage from "../assets/images/me.jpg";
import { Card, Alert } from "react-bootstrap";

function MyFace() {
  return (
    <div className="mx-auto row justify-content-center">
      <Card
        className=" col-10 col-md-8 col-lg-6 col-xl-3 mt-5 mx-2"
        style={{
          backgroundColor: "#3A3D2D",
          color: "white",
        }}
      >
        <Card.Body>
          <Card.Img src={myImage} />
          <Card.Title className="text-center">Mateusz Zdrodowski</Card.Title>
          <Card.Text className="text-center">Deweloper gier wideo.</Card.Text>
        </Card.Body>
      </Card>

      <Alert
        className="col-10 col-md-8 col-lg-7 col-xl-4 mt-5 mx-2 alert-danger align-self-start"
        style={{ backgroundColor: "#3A3D2D", color: "white" }}
      >
        <div>
          Cześć! Nazywam się Mateusz i zajmuję się programowaniem gier wideo.
          Moim głównym narzędziem pracy jest silnik Unity oraz język C#.
          Tworzenie gier to moja pasja i kierunek, w którym chcę rozwijać swoją
          przyszłość zawodową. Aktualnie uczę się w Liceum Kreacji Gier Wideo
          (LKGW), gdzie stale poszerzam swoją wiedzę i umiejętności. Poza
          programowaniem gier interesuję się również tematyką serwerów —
          posiadam własny serwer działający na wirtualizacji. Fascynują mnie
          także mikrokontrolery, druk 3D, jazda na deskorolce oraz szeroko
          pojęte programowanie
        </div>
      </Alert>
    </div>
  );
}
export default MyFace;
