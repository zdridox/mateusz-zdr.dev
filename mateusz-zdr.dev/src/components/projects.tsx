import SpaceCowboyPng from "../assets/images/SpaceCowboy.webp";
import CarGamePng from "../assets/images/CarGame.webp";
import WallGunPng from "../assets/images/WallGun.webp";
import LevelTreeImg from "../assets/images/levelTreeImg.webp";
import ArenaImg from "../assets/images/arenaImg.webp";
import TaStronaImg from "../assets/images/taStrona.webp";
import { Card } from "react-bootstrap";
import { useEffect } from "react";

function CreateCard(Title: string, Text: string, Img: string, Link: string) {
  return (
    <Card
      className="col-11 col-md-4 mx-md-2 col-lg-3 col-xl-3 col-xxl-2 mt-2"
      style={{ backgroundColor: "#2B2D42", color: "white" }}
    >
      <Card.Body className="d-flex flex-column">
        <Card.Img variant="top" src={Img} />
        <Card.Title
          style={{ textAlign: "center", textDecoration: "underline" }}
        >
          {Title}
        </Card.Title>
        <Card.Text>{Text}</Card.Text>
        <a href={Link} target="_blank" className="btn btn-primary mt-auto">
          Dowiedz się więcej
        </a>
      </Card.Body>
    </Card>
  );
}

function Projects() {
  useEffect(() => {
    document.title = "Projekty | Mateusz Zdrodowski";
  }, []);
  return (
    <>
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
        {CreateCard(
          "ProceduralLevelTree",
          "proceduralnie generowane drzewko poziomów ze ścieżkami i odblokowywaniem.",
          LevelTreeImg,
          "https://github.com/zdridox/ProceduralLevelTree"
        )}
        {CreateCard(
          "Arena plugin",
          "Plugin do minecraft(spigot/itp) na Arene 1v1 z kitami.",
          ArenaImg,
          "https://github.com/zdridox/Arena-Plugin"
        )}
        {CreateCard(
          "Ta Strona",
          "Strona napisana z React i Bootstrap hostowana na moim serwerze.",
          TaStronaImg,
          "https://github.com/zdridox/mateusz-zdr.dev"
        )}
      </div>
    </>
  );
}
export default Projects;
