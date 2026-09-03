import { Modal } from "react-bootstrap";
import SingleComment from "../singleComment/SingleComment";
import AddComment from "../addComment/AddComment";
import { useContext } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import { ThemeContext } from "../../contexts/ThemeContext";



const CommentList = ({ show, onHide, asin }) => {
    const {isDark} = useContext(ThemeContext)
    const {comments} = useContext(CommentsContext)
    return (
        <Modal show={show} onHide={onHide}
            size='lg' 
            centered
            scrollable
            data-bs-theme={isDark? 'dark' : 'light'}
        >
            <Modal.Dialog
            className="w-100 d-flex align-self-center" 
            style={{maxHeight: '550px', overflowY:'auto'}}
            >
                <Modal.Header 
                closeButton>
                    <Modal.Title>Recensioni</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    >
                    {comments.length === 0 ? (
                        <p className="text-center text-muted">Non ci sono recensioni, aggiungi la tua: </p>
                    ) : (
                        comments.map((comment) => (
                            <SingleComment
                                key={comment._id}
                                comment={comment.comment}
                                rate={comment.rate}
                                author={comment.author}
                                id={comment._id}
                                asin={comment.elementId}
                            />
                        ))
                    )}
                </Modal.Body>
                <Modal.Footer className="w-100">
                    <AddComment
                        asin={asin} 
                        onHide={onHide}/>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

export default CommentList;