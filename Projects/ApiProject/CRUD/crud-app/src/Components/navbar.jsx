import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./navBar.css";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary  sticky-top">
      <Container>
        <Navbar.Brand href="#home">Book Library</Navbar.Brand>
        <span className="custom-search-box">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </span>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
