//importa
import { useEffect, useState } from "react"
import CommentList from "../commentList/CommentList"
import { Badge } from "react-bootstrap"
import AddComment from "../addComment/AddComment"
//dichiara
const CommentArea = ({ asin, show, onHide }) => {
    //stato
    const [comments, setComments] = useState([])

    //fetch
    const getComments = async () => {
        const apiUrl = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`
        const apiToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNGU5OTIxMDU5ZjAwMTVlMjNhMGEiLCJpYXQiOjE3ODc4NjQ4NzYsImV4cCI6MTc4OTA3NDQ3Nn0.WEUhGu9DJdR0VKRF1JA8tvApR-XiF4ix-aRy_lDuoAc`
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Bearer ${apiToken}`
                }
            })
            const data = await response.json()
            setComments(data)
        } catch (error) {
            console.log(error)
        }
    }

    //useEffect 
    useEffect(() => {
        if (show && asin) {
            getComments()
        }
    }, [asin, show])
    console.log(comments)
    //markup

    return (
        <>
            <CommentList
                asin = {asin}
                show={show}
                onHide={onHide}
                comments={comments}
                getComments={getComments}
            />

        </>
    )
}

//esporta
export default CommentArea;