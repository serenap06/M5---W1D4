import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleBook from "./../../components/singleBook/SingleBook"
import CommentArea from "./../../components/commentArea/CommentArea";
import MyNav from "./../../components/myNav/MyNav";
import MyFooter from "./../../components/myFooter/MyFooter";
import { Row, Col } from "react-bootstrap";

const BookDetail = () => {
    const { asin } = useParams()
    const [book, setBook] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const getBook = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://epibooks.onrender.com/${asin}`)
            const data = await response.json()
            setBook(data[0])
        } catch (error) {
            console.log(error)
            setError('Errore nel caricamento dei libri')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => { getBook() }, [asin])

    return (
        <>
            <MyNav />
            {book && <Row className="my-2"> 
                <Col>
                    <div>
                        <SingleBook
                            isDetail={true}
                            book={book}
                        />
                    </div>
                </Col>
                <Col className="my-2">
                <h1
                className="text-info"
                >Recensioni</h1>
                    <CommentArea
                        asinIsSelected={asin}
                    />
                </Col>
            </Row>
            }
            <MyFooter />
        </>
    )
}
export default BookDetail;