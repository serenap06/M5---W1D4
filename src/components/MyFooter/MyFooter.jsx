import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  const { isDark } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer
        className={`py-4 mt-auto border-top ${isDark ? "bg-dark text-white border-secondary" : "bg-light text-dark border-light-subtle"}`}
      >
        <Container>
          <Row>
            <Col>
              <p>© {currentYear} EpiBooks. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default MyFooter;
