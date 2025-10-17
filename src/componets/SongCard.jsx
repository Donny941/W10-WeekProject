import { Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { HeartFill } from "react-bootstrap-icons";
import { addFavourite, removeFavourite, setPlayer } from "../redux/action";

function SongCard({ song }) {
  const dispatch = useDispatch();
  const myFav = useSelector((state) => state.favourite.content);

  const fav = myFav.find((favsong) => favsong.id === song.id);
  return (
    <div className="px-2">
      <Col className="text-center text-light">
        <div className="position-relative">
          <Image
            className="rounded"
            src={song.album.cover_medium}
            alt="Placeholder album cover"
            fluid
            onClick={() => {
              dispatch(setPlayer(song));
            }}
          />
          {!fav ? (
            <HeartFill
              onClick={() => {
                dispatch(addFavourite(song));
              }}
              color="#141B26"
              fontSize={20}
              style={{ cursor: "pointer" }}
              className="position-absolute  bottom-0 end-0 me-2 mb-2"
            />
          ) : (
            <HeartFill
              onClick={() => {
                dispatch(removeFavourite(song));
              }}
              color="rgb(60, 211, 60)"
              fontSize={20}
              style={{ cursor: "pointer" }}
              className="position-absolute  bottom-0 end-0 me-2 mb-2"
            />
          )}
        </div>
        <p className="mt-2">
          <strong>Track:</strong> {song.title}
          <br />
          <strong>Artist:</strong> {song.artist.name}
        </p>
      </Col>
    </div>
  );
}

export default SongCard;
