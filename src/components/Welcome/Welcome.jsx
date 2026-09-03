import { useContext } from "react";
import { Alert, Row, Col } from "react-bootstrap";
import { BooksContext } from "../../contexts/BooksContext";
import {ThemeContext} from '../../contexts/ThemeContext'

const Welcome = () => {
    const {booksData} = useContext(BooksContext)
    const {isDark} = useContext(ThemeContext)
    console.log(booksData)
    return (
            <div className={isDark ? 'bg-dark' : 'bg-info'}>
                <Col >
                    <Alert className="text-center fs-5" 
                    variant={isDark? 'dark' : 'info'}>
                        Benvenuto su EpiBooks, perditi tra le pagine dei nostri <span className="fw-bold">{booksData.length}</span> libri!
                    </Alert>
                </Col>
            </div>
    )
}
export default Welcome;