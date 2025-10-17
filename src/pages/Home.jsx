import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../componets/SideBar";
import UpperBar from "../componets/UpperBar";
import Player from "../componets/Player";
import AlbumSection from "../componets/AlbumSection";

function Home() {
  return (
    <Container>
      <Row className="margin-bot">
        <Col xs={2}>
          <SideBar />
        </Col>
        <Col xs={12}>
          <UpperBar />
          <AlbumSection title="Rock Classics" />
          <AlbumSection title="Pop Culture" />
          <AlbumSection title="#HipHop" />
          <Player />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
