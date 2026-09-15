import { useContext, useState } from "react";
import SingleBook from "../singleBook/SingleBook";
import { Container, Row, Col, Alert, Button, Spinner } from "react-bootstrap";
import { BooksContext } from "../../contexts/BooksContext";
import { SearchBookContext } from "../../contexts/SearchBookContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import CommentArea from "../commentArea/CommentArea";
import "./AlltheBooks.css";



const AllTheBooks = () => {
  const { booksData, isLoading, error } = useContext(BooksContext);
  const { isSearchEmpty } = useContext(SearchBookContext);
  const { isDark } = useContext(ThemeContext);
  const [isSelected, setIsSelected] = useState(null);

  const showComments = (book) => {
    setIsSelected((prevBook) => (prevBook === book.asin ? null : book.asin));
  };
  const [limit, setLimit] = useState(12);

  const showMore = () => {
    setLimit((prevLimit) => prevLimit + 12); //uso un parametro e non limit+12 per evitare errori con i click del pulsante
  };

  return (
    <div className={isDark ? "bg-dark" : "bg-white"}>
      <Container className="py-5 mx-auto">
        <Row className="g-4">
          <Col className="px-0" md={8}>
            <Row className="g-2">
              {isLoading && (
                <div className="text-center my-5">
                  <Spinner
                    animation="border"
                    variant={isDark ? "light" : "info"}
                  ></Spinner>
                  <p className="mt-2">Caricamento in corso...</p>
                </div>
              )}
              {error && !isLoading && <Alert variant="danger">{error}</Alert>}
              {isSearchEmpty && (
                <Alert variant="warning">
                  Non ci sono libri che corrispondono alla tua ricerca
                </Alert>
              )}
              {!isSearchEmpty &&
                booksData.slice(0, limit).map((book, index) => (
                  <Col
                    key={`${book.asin}-${index}`}
                    xs={12}
                    md={4}
                    lg={3}
                    xl={3}
                  >
                    <SingleBook
                      book={book}
                      showComments={showComments}
                      asinIsSelected={isSelected}
                    />
                  </Col>
                ))}
            </Row>
            <Row>
              <Col className="text-center">
                {limit < booksData.length && (
                  <Button
                    className="my-3"
                    type="button"
                    variant={isDark ? "outline-light" : "info"}
                    onClick={showMore}
                  >
                    Mostra altri libri
                  </Button>
                )}
              </Col>
            </Row>
          </Col>
          <Col md={4} className="mw-100 d-none d-md-block ps-4">
            <div className="sticky-top comment-area">
              {isSelected ? (
                <CommentArea asinIsSelected={isSelected} />
              ) : (
                <Alert variant="info">
                  Seleziona un libro per leggere i commenti
                </Alert>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AllTheBooks;
