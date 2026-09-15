import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleBook from "./../../components/singleBook/SingleBook";
import CommentArea from "./../../components/commentArea/CommentArea";
import MyNav from "./../../components/myNav/MyNav";
import MyFooter from "./../../components/myFooter/MyFooter";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContext";
import NotFound from "../notFound/NotFound";

const BookDetail = () => {
  const { asin } = useParams();
  const [book, setBook] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { isDark } = useContext(ThemeContext);

  const getBook = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(`https://epibooks.onrender.com/${asin}`);
      if (!response.ok) {
        throw new Error("Libro non trovato");
      }
      const data = await response.json();
      if (!data || data.length === 0) {
        setError(true);
      } else {
        setBook(data[0]);
      }
    } catch (error) {
      console.log(error);
      setError("Errore nel caricamento del libro");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBook();
  }, [asin]);

  if (error && !isLoading) {
    return <NotFound />;
  }
  return (
    <div className={isDark ? "bg-dark" : "bg-white"}>
      <MyNav />
      <Container>
        {isLoading && (
          <div className="text-center my-5">
            <Spinner
              animation="border"
              variant={isDark ? "light" : "info"}
            ></Spinner>
            <p className="mt-2">Caricamento in corso...</p>
          </div>
        )}
        {error && !isLoading && <NotFound />}
        {book && !isLoading && (
          <Row className="mx-auto py-3 min-vh-100">
            <Col md={7}>
              <div>
                <SingleBook isDetail={true} book={book} />
              </div>
            </Col>
            <Col md={5} className="mt-5">
              <h1 className={isDark ? "text-light" : "text-info"}>
                Recensioni
              </h1>
              <CommentArea asinIsSelected={asin} />
            </Col>
          </Row>
        )}
      </Container>
      <MyFooter />
    </div>
  );
};
export default BookDetail;
