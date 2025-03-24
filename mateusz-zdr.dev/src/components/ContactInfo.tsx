import { Alert, Button } from "react-bootstrap";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Kontakt | Mateusz Zdrodowski";
  }, []);
  return (
    <>
      <div className="mt-5">
        <Alert
          className="alert-info mx-auto space-grotesk"
          style={{ width: "300px" }}
        >
          <h1>Kontakt</h1>
          email: mateusz.zdrod@gmail.com<br></br>
          discord: zdridox
        </Alert>
        <Alert
          className="alert-danger mx-auto space-grotesk"
          style={{ width: "300px" }}
        >
          <h1>Linki</h1>
          <a href="https://zdridox.itch.io" target="_blank">
            <Button className="mx-1 mt-1 btn-dark">Itch.io</Button>
          </a>

          <a href="https://github.com/zdridox" target="_blank">
            <Button className="mx-1 mt-1 btn-dark">Github</Button>
          </a>

          <a
            href="https://www.linkedin.com/in/mateusz-zdrodowski-093b661aa/"
            target="_blank"
          >
            <Button className="mx-1 mt-1 btn-dark">LinkedIn</Button>
          </a>
        </Alert>
      </div>
    </>
  );
}
export default Contact;
