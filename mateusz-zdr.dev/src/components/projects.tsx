import SpaceCowboyPng from "../assets/images/SpaceCowboy.webp";
import CarGamePng from "../assets/images/CarGame.webp";
import WallGunPng from "../assets/images/WallGun.webp";
import { Card } from "react-bootstrap";

function CreateCard(Title: string, Text: string, Img: string, Link: string) {
  return (
    <Card
      className="col-11 col-md-3 mx-md-2 col-lg-3 col-xl-2 mt-2"
      style={{ backgroundColor: "#2B2D42", color: "white" }}
    >
      <Card.Body className="d-flex flex-column">
        <Card.Img variant="top" src={Img} />
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Text}</Card.Text>
        <a href={Link} target="_blank" className="btn btn-primary mt-auto">
          Dowiedz się więcej
        </a>
      </Card.Body>
    </Card>
  );
}

function Projects() {
  return (
    <div
      className="mx-auto mt-5 row justify-content-center"
      style={{ width: "100%" }}
    >
      {CreateCard(
        "SpaceCowboy",
        "Tower Defense z rewolwerem który czerpię amunicję z gwiazd i dwoma rodzajami przeciwników",
        SpaceCowboyPng,
        "https://zdridox.itch.io/spacecowboy"
      )}
      {CreateCard(
        "CarGame",
        "Gra polegająca na nieskończonym driftowaniu po proceduralnie generowanej mapie",
        CarGamePng,
        "https://zdridox.itch.io/cargame"
      )}
      {CreateCard(
        "WallGun",
        "Gra movementowa z m.in bieganiem po ścianach inpirowana Portal 2 i TitanFall 2 z pistoletem strzelającym ścianami",
        WallGunPng,
        "https://zdridox.itch.io/wallgun"
      )}
    </div>
  );
}
export default Projects;
