import { useContext } from "react";
import { Alert, Row, Col } from "react-bootstrap";
import { BooksContext } from "../../contexts/BooksContext";

const Welcome = () => {
    const {booksData} = useContext(BooksContext)
    console.log(booksData)
    return (
        <Row>
            <Col>
                <Alert className="text-center fs-5" variant="light">
                    Benvenuto su EpiBooks, perditi tra le pagine dei nostri {booksData.length} libri!
                </Alert>
            </Col>
        </Row>

    )
}
export default Welcome;