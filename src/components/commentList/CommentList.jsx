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
       <div
       className={isDark? 'text-white':''}>
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
       </div>
    )
}

export default CommentList;