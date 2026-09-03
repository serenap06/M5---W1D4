import { useContext, useState } from 'react';
import SingleBook from '../singleBook/SingleBook';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import { BooksContext } from '../../contexts/BooksContext';
import books from '../../data/fantasy.json'
import { SearchBookContext } from '../../contexts/SearchBookContext';
import { ThemeContext } from '../../contexts/ThemeContext'

const AllTheBooks = () => {
    const { booksData, setBooksData } = useContext(BooksContext)
    const { isSearchEmpty } = useContext(SearchBookContext)
    const { isDark } = useContext(ThemeContext)

    const [limit, setLimit] = useState(12)

    const showMore = () => {
        setLimit((prevLimit) => prevLimit + 12) //uso un parametro e non limit+12 per evitare errori con i click del pulsante
    }

    return (
        <div
            className={isDark ? 'bg-dark' : 'bg-white'}>
            <Container>
                {/*Row Griglia Libri*/}
                <Row className='g-4'>
                    {isSearchEmpty && (
                        <Alert variant='warning'>
                            Non ci sono libri che corrispondono alla tua ricerca
                        </Alert>
                    )}
                    {!isSearchEmpty && booksData.slice(0, limit).map((book, index) =>
                        <Col
                            key={`${book.asin}-${index}`}
                            xs={12} md={4} lg={3} xl={2}
                        >
                            <SingleBook book={book} />
                        </Col>
                    )}
                </Row>
                <Row>
                        <Col className='text-center g-4'>
                            {limit < booksData.length && (
                                <Button
                                    type='button'
                                    variant={isDark ? 'outline-light' : 'info'}
                                    onClick={showMore}
                                >
                                    Mostra altri libri
                                </Button>)
                            }
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}
export default AllTheBooks;