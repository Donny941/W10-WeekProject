// src/componets/S/SideBarRight.jsx

import { Col, Row, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { removeFavourite, setPlayer } from "../redux/action";
import { HeartFill } from "react-bootstrap-icons";

function SideBarRight() {
  const dispatch = useDispatch();
  const myFav = useSelector((state) => state.favourite.content);

  return (
    <div className="text-light mt-4 fixed-right">
      <h5 className="mb-3">Favourites</h5>
      <Row className="g-2">
        {myFav.map((song) => (
          <Col xs={12} key={song.id} className="d-flex align-items-center mb-2 position-relative">
            <Image
              src={song.album.cover_small}
              alt={song.title}
              style={{ height: "40px", width: "40px", cursor: "pointer" }}
              onClick={() => dispatch(setPlayer(song))}
            />

            <div className="ms-2 text-truncate" style={{ fontSize: "0.8rem" }}>
              <div className="text-light">{song.title}</div>
              <small className="text-light">{song.artist.name}</small>
            </div>

            <HeartFill
              onClick={() => {
                dispatch(removeFavourite(song));
              }}
              color="rgb(60, 211, 60)"
              size={13}
              style={{ cursor: "pointer" }}
              className="position-absolute bottom-0 ms-1"
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SideBarRight;
