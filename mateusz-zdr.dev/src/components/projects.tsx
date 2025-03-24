import SpaceCowboyPng from "../assets/images/SpaceCowboy.webp";
import CarGamePng from "../assets/images/CarGame.webp";
import WallGunPng from "../assets/images/WallGun.webp";
import LevelTreeImg from "../assets/images/levelTreeImg.webp";
import ArenaImg from "../assets/images/arenaImg.webp";
import TaStronaImg from "../assets/images/taStrona.webp";
import { Card } from "react-bootstrap";
import { useEffect } from "react";

function CreateCard(
  Title: string,
  Text: string,
  Img: string,
  Link: string,
  Tags: React.ReactNode
) {
  return (
    <Card
      className="col-11 col-md-4 mx-1 col-lg-3 col-xl-3 col-xxl-3 mt-2"
      style={{
        backgroundColor: "#2B2D42",
        color: "white",
      }}
    >
      <Card.Body className="d-flex flex-column">
        <div className="d-flex">{Tags}</div>
        <Card.Img
          variant="top"
          src={Img}
          style={{
            paddingTop: "5px",
            borderRadius: "12px",
          }}
        />
        <Card.Title
          style={{ textDecoration: "underline", textAlign: "center" }}
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

function CreateTag(Text: string, Color: string) {
  return (
    <div
      style={{
        fontSize: "12px",
        fontWeight: "bold",
        backgroundColor: Color,
        color: "#2B2D42",
        width: `${12 * Text.length}px`,
        textAlign: "center",
      }}
      className="rounded-1 mx-1"
    >
      {Text}
    </div>
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
        style={{ width: "100%", paddingBottom: "50px" }}
      >
        {CreateCard(
          "SpaceCowboy",
          "Tower Defense z rewolwerem który czerpię amunicję z gwiazd i dwoma rodzajami przeciwników",
          SpaceCowboyPng,
          "https://zdridox.itch.io/spacecowboy",
          <>{CreateTag("GRA", "#26d18d")}</>
        )}
        {CreateCard(
          "CarGame",
          "Gra polegająca na nieskończonym driftowaniu po proceduralnie generowanej mapie",
          CarGamePng,
          "https://zdridox.itch.io/cargame",
          <>{CreateTag("GRA", "#26d18d")} </>
        )}
        {CreateCard(
          "WallGun",
          "Gra movementowa z m.in bieganiem po ścianach inpirowana Portal 2 i TitanFall 2 z pistoletem strzelającym ścianami",
          WallGunPng,
          "https://zdridox.itch.io/wallgun",
          <>{CreateTag("GRA", "#26d18d")}</>
        )}
        {CreateCard(
          "ProceduralLevelTree",
          "proceduralnie generowane drzewko poziomów ze ścieżkami i odblokowywaniem.",
          LevelTreeImg,
          "https://github.com/zdridox/ProceduralLevelTree",
          <>
            {CreateTag("ASSET", "#fc68e1")}
            {CreateTag("REPO", "#a15bbd")}
          </>
        )}
        {CreateCard(
          "Arena plugin",
          "Plugin do minecraft(spigot/itp) na Arene 1v1 z kitami.",
          ArenaImg,
          "https://github.com/zdridox/Arena-Plugin",
          <>
            {CreateTag("PLUGIN", "#b59a02")}
            {CreateTag("REPO", "#a15bbd")}
          </>
        )}
        {CreateCard(
          "Ta Strona",
          "Strona napisana z React i Bootstrap hostowana na moim serwerze.",
          TaStronaImg,
          "https://github.com/zdridox/mateusz-zdr.dev",
          <>
            {CreateTag("STRONA", "#4ebded")}
            {CreateTag("REPO", "#a15bbd")}
          </>
        )}
      </div>
    </>
  );
}
export default Projects;
