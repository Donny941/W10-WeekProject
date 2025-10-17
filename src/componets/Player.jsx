import { Col, Container, Row } from "react-bootstrap";
import play from "../assets/play.png";
import next from "../assets/next.png";
import prev from "../assets/prev.png";
import repeat from "../assets/repeat.png";
import shuffle from "../assets/shuffle.png";

function Player() {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col className="col-lg-10 offset-lg-2">
          <Row className="row h-100 flex-column justify-content-center align-items-center">
            <Col className="col-6 col-md-4 playerControls mt-3">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Player;
