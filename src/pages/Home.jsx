import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../componets/SideBar";
import UpperBar from "../componets/UpperBar";
import Player from "../componets/Player";
import AlbumSection from "../componets/AlbumSection";
import { useSelector } from "react-redux";

function Home() {
  const query = useSelector((state) => state.search.query);
  return (
    <Container>
      <Row className="margin-bot">
        <Col xs={2}>
          <SideBar />
        </Col>
        <Col xs={10} className="offset-2">
          <UpperBar />
          {query !== "" && <AlbumSection title={`Search results for: ${query}`} query={query} category="query" />}
          <AlbumSection title="Rock Classics" query="queen" category="rock" />
          <AlbumSection title="Pop Culture" query="katy perry" category="pop" />
          <AlbumSection title="#HipHop" query="eminem" category="hiphop" />
          <Player />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
