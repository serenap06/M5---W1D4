// importare
import { useContext, useState } from "react";
import { Badge, Card, Button, CardFooter } from "react-bootstrap";
import CommentArea from "../commentArea/CommentArea";
import { ThemeContext } from "../../contexts/ThemeContext";

// dichiarare componente
const SingleBook = ({ book }) => {
    const { isDark } = useContext(ThemeContext)
    const [isSelected, setIsSelected] = useState(false)
    const [isRed, setIsRed] = useState(false)

    const onClickRed = () => {
        setIsRed(!isRed)
    }
    const toggleModal = () => {
        setIsSelected(!isSelected)
    }
    return (
        <div className="h-100">
            <Card
                bg={isDark ? 'dark' : 'white'}
                onClick={onClickRed}
                className={`h-100 d-flex flex-column justify-content-between ${isRed ? 'border-4' : ''}`}
                border={isRed ? 'danger' : isDark ? 'light' : ''}
                text={isDark ? 'light' : ''}
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
                </Card.Body>
                <CardFooter className="d-flex flex-column justify-content-between ps-2">
                    <Button
                        text={isDark ? 'dark' : ''}
                        onClick={toggleModal}
                        variant={isDark ? 'light' : 'info'}
                    >
                        Recensioni
                    </Button>
                </CardFooter>
            </Card>

            {isSelected && (<CommentArea
                asin={book.asin}
                show={isSelected}
                onHide={() => setIsSelected(false)} />)}

        </div>
    )
}

//esportare
export default SingleBook;