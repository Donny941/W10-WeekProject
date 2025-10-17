import { Col, Image } from "react-bootstrap";

function SongCard({ song }) {
  return (
    <Col className="text-center text-light">
      <Image src="https://placehold.co/250x250/282828/fff?text=Cover+1" alt="Placeholder album cover" fluid />
      <p className="mt-2">
        <strong>Track:</strong> "Titolo Canzone Fissa 1"
        <br />
        <strong>Artist:</strong> Nome Artista 1
      </p>
    </Col>
  );
}

export default SongCard;
