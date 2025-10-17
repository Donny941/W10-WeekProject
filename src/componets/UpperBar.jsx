import { Col, Container, Row } from "react-bootstrap";

function UpperBar() {
  return (
    <Col className="ms-5 mainLinks d-none d-md-flex">
      <a href="#">TRENDING</a>
      <a href="#">PODCAST</a>
      <a href="#">MOODS AND GENRES</a>
      <a href="#">NEW RELEASES</a>
      <a href="#">DISCOVER</a>
    </Col>
  );
}

export default UpperBar;
