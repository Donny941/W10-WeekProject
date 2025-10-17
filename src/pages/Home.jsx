import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../componets/SideBar";
import UpperBar from "../componets/UpperBar";
import Player from "../componets/Player";
import AlbumSection from "../componets/AlbumSection";
import { useSelector } from "react-redux";
import SideBarRight from "../componets/SideBarRights";

function Home() {
  const query = useSelector((state) => state.search.query);
  return (
    <Container>
      <Row className="margin-bot">
        <Col md={2} className="fixed-right d-none d-lg-block">
          <SideBar />
        </Col>
        <Col xs={10} className="offset-1">
          <UpperBar />
          {query !== "" && <AlbumSection title={`Search results for: ${query}`} query={query} category="query" />}
          <AlbumSection title="Rock Classics" query="queen" category="rock" />
          <AlbumSection title="Pop Culture" query="katy perry" category="pop" />
          <AlbumSection title="#HipHop" query="eminem" category="hiphop" />
          <Player />
        </Col>
        <Col md={2} className="fixed-right d-none d-lg-block">
          <SideBarRight />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
