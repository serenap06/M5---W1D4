// importare
import { useState } from "react";
import { Card } from "react-bootstrap";

// dichiarare componente
const SingleBook = ({ book }) => {
    const [isSelected, setIsSelected] = useState(false)

    const onCardClick = ()=>{
        setIsSelected(!isSelected)
    }

    return (
        <Card 
        onClick={onCardClick}
        className={`h-100 ${isSelected?'border-4':''}`}
        border={`${isSelected?'danger':''}`}
        >
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
    )
}

//esportare
export default SingleBook;