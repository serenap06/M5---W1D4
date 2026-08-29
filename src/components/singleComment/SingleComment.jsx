import { Button } from "react-bootstrap";
import { Eraser, Star } from "lucide-react";
import './singleComment.css';

const SingleComment = ({ comment, rate, author, id, getComments }) => {

    const deleteComment = async () => {
        const apiToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNGU5OTIxMDU5ZjAwMTVlMjNhMGEiLCJpYXQiOjE3ODc4NjQ4NzYsImV4cCI6MTc4OTA3NDQ3Nn0.WEUhGu9DJdR0VKRF1JA8tvApR-XiF4ix-aRy_lDuoAc`
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                    'Content-Type': 'application/json'
                },
            })
            return await response.json()
        } catch (error) {
            console.log(error)
        } finally {
            getComments()
        }
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center border-bottom py-2 mx-1">
                <div>
                    <p className="mb-1">{author}</p>
                    <span className="text-warning font-monospace text-wrapper">({rate}/5<Star className='star-icon' />)</span>
                    <p className="mb-0 text-muted ">{comment}</p>
                </div>
                <Button
                className="text-erase mx-2 align-self-end"
                    variant="danger"
                    size="sm"
                    onClick={deleteComment}
                >Elimina<Eraser className="erase-icon"/></Button>
            </div>
        </>
    )
}

export default SingleComment;