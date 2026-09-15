import { useContext } from "react";
import { Alert, Col } from "react-bootstrap";
import { BooksContext } from "../../contexts/BooksContext";
import { ThemeContext } from "../../contexts/ThemeContext";

const Welcome = () => {
  const { booksData } = useContext(BooksContext);
  const { isDark } = useContext(ThemeContext);

  const totalBooks= booksData.length || 0;
  return (
    <div className={isDark ? "bg-dark" : "bg-info"}>
      <Col>
        <Alert
          className={`text-center fs-5 mb-0 shadow-sm border ${
          isDark ? "border-secondary text-dark" : "border-info-subtle"
        }`}
          variant={isDark ? "dark" : "info"}
        >
          Benvenuto su <span className="fw-bold">EpiBooks</span>, perditi tra le pagine dei nostri{" "}
          <span className="fw-bold">{totalBooks}</span> libri!
        </Alert>
      </Col>
    </div>
  );
};
export default Welcome;
