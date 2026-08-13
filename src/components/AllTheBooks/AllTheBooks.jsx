import books from '../../data/fantasy.json';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const AllTheBooks = () => {
    console.log(Card)
    return (
        <Container>
            <Row className='g-4'>
                {books.map((book =>
                    <Col
                        key={book.asin}
                        xs={12}
                        md={4}
                        lg={3}
                        xl={2}
                    >
                        <Card className="h-100">
                            <Card.Img variant="top" src={book.img} />
                            <Card.Body>
                                <Card.Title className='card-title fs-6 text'>{book.title}</Card.Title>
                                <Card.Text>
                                    € {book.price.toFixed(2)}
                                </Card.Text>
                                <Card.Text>
                                    {book.category}
                                </Card.Text>                            
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export default AllTheBooks;