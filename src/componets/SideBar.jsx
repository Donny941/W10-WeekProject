import { Navbar, Nav, Container, Form, InputGroup, Button, Col, NavbarBrand, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import { HouseFill, List, BookFill } from "react-bootstrap-icons";
import { Link } from "react-router";

function SideBar() {
  return (
    <Col md={2}>
      <Navbar expand="md" className="navbar-dark fixed-left justify-content-between">
        <Container className="flex-column align-items-start">
          <NavbarBrand as={Link} to="/">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </NavbarBrand>

          <Navbar.Collapse id="basic-navbar-nav" className="mt-3">
            <Nav className="flex-column">
              <Nav.Link as={Link} to="" className="d-flex align-items-center">
                <HouseFill size={24} />
                <span className="ms-2">Home</span>
              </Nav.Link>
              <Nav.Link as={Link} to="" className="d-flex align-items-center">
                <BookFill size={24} />
                <span className="ms-2">Your Library</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Form className="mt-5">
            <InputGroup>
              <Form.Control placeholder="Search" aria-label="Search" />
              <Button variant="outline-secondary" size="sm">
                GO
              </Button>
            </InputGroup>
          </Form>
        </Container>

        <div className="nav-btn">
          <Button className="signup-btn">Sign Up</Button>
          <Button className="login-btn">Login</Button>
          <div>
            <a href="#cookie">Cookie Policy</a> | <a href="#privacy">Privacy</a>
          </div>
        </div>
      </Navbar>
    </Col>

    //    <aside class="col col-2">
    //   <nav
    //     class="navbar navbar-expand-md fixed-left justify-content-between"
    //     id="sidebar"
    //   >
    //     <div class="container flex-column align-items-start">
    //       <a class="navbar-brand" href="index.html">
    //         <img
    //           src="assets/logo/logo.png"
    //           alt="Spotify Logo"
    //           width="131"
    //           height="40"
    //         />
    //       </a>
    //       <button
    //         class="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarNavAltMarkup"
    //         aria-controls="navbarNavAltMarkup"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //         <div class="navbar-nav">
    //           <ul>
    //             <li>
    //               <a
    //                 class="nav-item nav-link d-flex align-items-center"
    //                 href="#"
    //                 ><i class="bi bi-house-door-fill"></i>&nbsp; Home
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 class="nav-item nav-link d-flex align-items-center"
    //                 href="#"
    //                 ><i class="bi bi-book-fill"></i>&nbsp; Your Library</a
    //               >
    //             </li>
    //             <li>
    //               <div class="input-group mt-3">
    //                 <input
    //                   type="text"
    //                   class="form-control"
    //                   placeholder="Search"
    //                   aria-label="Search"
    //                 />
    //                 <div class="input-group-append">
    //                   <button
    //                     class="btn btn-outline-secondary btn-sm h-100"
    //                   >
    //                     GO
    //                   </button>
    //                 </div>
    //               </div>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="nav-btn">
    //       <button class="btn signup-btn" type="button">Sign Up</button>
    //       <button class="btn login-btn" type="button">Login</button>
    //       <a href="#">Cookie Policy</a> |
    //       <a href="#"> Privacy</a>
    //     </div>
    //   </nav>
    // </aside>
  );
}

export default SideBar;
