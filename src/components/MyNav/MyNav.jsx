import { Container, Nav, Navbar } from "react-bootstrap";
import { Library } from "lucide-react";
import SearchBar from "../searchBar/SearchBar";
import { useContext } from "react";
import DarkThemeMode from "../DarkThemeMode/DarkThemeMode";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";

const MyNav = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <Navbar
      expand="lg"
      bg={isDark ? "dark" : "info"}
      data-bs-theme={isDark ? "dark" : "light"}
      className="sticky-top shadow-sm"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2"
        >
          <Library color={isDark ? "#ffffff" : "#000000"} />
          <span className="fw-bold">EpiBooks</span>
        </Navbar.Brand>

        <div className="d-flex align-items-center gap-2 order-lg-last ms-2">
          <DarkThemeMode />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <div className="mt-2 mt-lg-0">
            <SearchBar />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
