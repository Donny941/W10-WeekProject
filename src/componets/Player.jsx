import { Col, Container, Image, Row } from "react-bootstrap";
import play from "../assets/play.png";
import next from "../assets/next.png";
import prev from "../assets/prev.png";
import repeat from "../assets/repeat.png";
import shuffle from "../assets/shuffle.png";
import songPlaceholder from "../assets/songplaceholder.png";
import { useDispatch, useSelector } from "react-redux";
import { HeartFill } from "react-bootstrap-icons";
import { addFavourite, removeFavourite } from "../redux/action";

function Player() {
  const dispatch = useDispatch();
  const song = useSelector((state) => state.playsong.content);
  const myFav = useSelector((state) => state.favourite.content);

  const fav = myFav.find((favsong) => favsong.id === song.id);
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="align-items-center h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row className="row h-100 align-items-center justify-content-between">
            <Col className="col-3">
              {song ? (
                <div className="d-flex align-items-center">
                  <Image src={song.album.cover_small} alt="Now playing cover" style={{ height: "50px" }} />

                  <div className="ms-3 text-light" style={{ maxWidth: "200px" }}>
                    <div className="text-truncate">{song.title}</div>
                    <small className="text-truncate d-inline-block">{song.artist.name}</small>
                    {!fav ? (
                      <HeartFill
                        onClick={() => {
                          dispatch(addFavourite(song));
                        }}
                        color="#141B26"
                        fontSize={13}
                        style={{ cursor: "pointer" }}
                        className="ms-4"
                      />
                    ) : (
                      <HeartFill
                        onClick={() => {
                          dispatch(removeFavourite(song));
                        }}
                        color="rgb(60, 211, 60)"
                        fontSize={13}
                        style={{ cursor: "pointer" }}
                        className="ms-4"
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  <Image src={songPlaceholder} alt="Now playing cover" style={{ height: "50px" }} />
                </div>
              )}
            </Col>
            <Col className="col-6 playerControls d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center gap-3">
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
              <div className="progress mt-3 w-100" style={{ maxWidth: "400px" }}>
                <div role="progressbar"></div>
              </div>
            </Col>
            <Col className="col-3"></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Player;
