import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Badge, Card, Button } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContext";

// dichiarare componente
const SingleBook = ({ book, showComments, asinIsSelected, isDetail=false }) => {
    const { isDark } = useContext(ThemeContext)
    const isSelected = asinIsSelected === book.asin

    const navigate = useNavigate()

    const detailBook = () => {
        navigate(`/${book.asin}`)
    }

    const handleBookClick = () => {
        showComments(book)
    }

    return (
        <div className="h-100"
        
        >
            <Card
                bg={isDark ? 'dark' : 'white'}
                onClick={handleBookClick}
                className={`h-100 d-flex flex-column justify-content-between ${isSelected ? 'border-4' : ''}`}
                border={isSelected ? 'danger' : isDark ? 'light' : ''}
                text={isDark ? 'light' : ''}
                data-testid="BookCard"
            >

                <Card.Img
                    variant="top"
                    src={book.img}
                    className=' h-50 object-fit-cover'
                />
                <Card.Body className="d-flex flex-column justify-content-between ps-2">
                    <Card.Title
                        className='card-title fs-6'
                    >{book.title}
                    </Card.Title>
                    <Card.Text className="fw-medium fs-6">
                        € {book.price.toFixed(2)}
                    </Card.Text>
                    <Card.Text>
                        <Badge pill
                            bg={isDark ? 'light' : 'info'}
                            text={isDark ? 'dark' : ''}
                        >Categoria</Badge><br />
                        {book.category.charAt(0).toUpperCase() + book.category.slice(1)}
                    </Card.Text>
                    <Card.Text>
                        <Badge pill bg={isDark ? 'light' : 'info'}
                            text={isDark ? 'dark' : ''}>Codice Asin</Badge><br />
                        {book.asin}
                    </Card.Text>
                    {!isDetail && <Button
                        className='btn btn-info'
                        onClick={detailBook}
                        
                    >
                        Dettagli
                    </Button>}
                </Card.Body>
            </Card>

        </div>
    )
}

//esportare
export default SingleBook;