import { useEffect } from "react";
import { Col, Row, Image, Spinner } from "react-bootstrap";
import { getSongAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import SongCard from "./SongCard";

import Slider from "react-slick";

function AlbumSection({ title, query, category }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.search.songs[category]);
  const isLoading = useSelector((state) => state.search.isLoading);

  const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  useEffect(() => {
    dispatch(getSongAction(URL, query, category));
  }, [dispatch, query, category]);

  return (
    <Col md={11} className="mx-auto mt-5">
      <div>
        <h2 className="text-light mb-4">{title}</h2>
        {!isLoading ? (
          <Slider {...settings}>
            {songs.map((song) => {
              return <SongCard key={song.id} song={song} />;
            })}
          </Slider>
        ) : (
          <div className="d-flex justify-content-center">
            <Spinner animation="grow" variant="light" role="status"></Spinner>
          </div>
        )}
      </div>
    </Col>
  );
}

export default AlbumSection;
