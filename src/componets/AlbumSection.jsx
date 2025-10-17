import { Col, Row, Image } from "react-bootstrap";

function AlbumSectionStatic({ title }) {
  return (
    <Col md={10} className="mx-auto mt-5">
      <div>
        <h2 className="text-light">{title}</h2>

        <Row xs={1} sm={2} lg={3} xl={4} className="g-3 py-3">
          <Col className="text-center text-light">
            <Image src="https://placehold.co/250x250/282828/fff?text=Cover+1" alt="Placeholder album cover" fluid />
            <p className="mt-2">
              <strong>Track:</strong> "Titolo Canzone Fissa 1"
              <br />
              <strong>Artist:</strong> Nome Artista 1
            </p>
          </Col>

          <Col className="text-center">
            <Image src="https://placehold.co/250x250/282828/fff?text=Cover+2" alt="Placeholder album cover" fluid />
            <p className="mt-2">
              <strong>Track:</strong> "Titolo Canzone Fissa 2"
              <br />
              <strong>Artist:</strong> Nome Artista 2
            </p>
          </Col>

          <Col className="text-center">
            <Image src="https://placehold.co/250x250/282828/fff?text=Cover+3" alt="Placeholder album cover" fluid />
            <p className="mt-2">
              <strong>Track:</strong> "Titolo Canzone Fissa 3"
              <br />
              <strong>Artist:</strong> Nome Artista 3
            </p>
          </Col>

          <Col className="text-center">
            <Image src="https://placehold.co/250x250/282828/fff?text=Cover+4" alt="Placeholder album cover" fluid />
            <p className="mt-2">
              <strong>Track:</strong> "Titolo Canzone Fissa 4"
              <br />
              <strong>Artist:</strong> Nome Artista 4
            </p>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default AlbumSectionStatic;
