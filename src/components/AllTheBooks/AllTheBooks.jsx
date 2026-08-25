import { useState } from 'react';
import books from '../../data/fantasy.json';
import SingleBook from '../SingleBook/SingleBook';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { Search } from 'lucide-react';


const AllTheBooks = () => {
    // stato dell'input
    const [inputData, setInputData] = useState('')
    const [booksData, setBooksData] = useState(books)
    const [isSearchEmpty, setIsSearchEmpty] = useState(false)

    console.log(booksData)
    // evento  
    const onChangeInput = (e) => {
        const value = e.target.value
        setInputData(value)
        if (value === '') {
            setBooksData(books)
            setIsSearchEmpty(false)
        }
    }
    const onSearch = (e) => {
        e.preventDefault()
        setIsSearchEmpty(false)
        const filtered = books.filter(singleBook =>
            singleBook.title.toLowerCase().includes(inputData.toLowerCase())
        )
        if (filtered.length === 0) {
            setIsSearchEmpty(true)
        }
        setBooksData(filtered)
    }
    //markup
    console.log(inputData)
    return (
        <Container>
            {/*Row Barra di Ricerca*/}
            <Row>
                <Col>
                    <form
                        className='my-2 text-end'
                    >
                        <input
                            value={inputData}
                            onChange={onChangeInput}
                            type="text"
                            placeholder='Cerca il tuo libro...'
                        />
                        <button
                            onClick={onSearch}
                            className='btn btn-info'>
                            <Search />
                        </button>
                    </form>
                </Col>
            </Row>

            {/*Row Griglia Libri*/}
            <Row className='g-4'>
                {isSearchEmpty && (
                    <Alert variant='warning'>
                        Non ci sono libri che corrispondono alla tua ricerca
                    </Alert>
                )}
                {!isSearchEmpty && booksData.map((book) =>
                    <Col
                        key={book.asin}
                        xs={12} md={4} lg={3} xl={2}
                    >
                        <SingleBook book={book} />
                    </Col>
                )}
            </Row>
        </Container>
    )
}
export default AllTheBooks;