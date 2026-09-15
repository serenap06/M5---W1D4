import SingleComment from "../singleComment/SingleComment";
import { useContext } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import { ThemeContext } from "../../contexts/ThemeContext";

const CommentList = ({}) => {
  const { isDark } = useContext(ThemeContext);
  const { comments } = useContext(CommentsContext);
  return (
    <div className={isDark ? "text-white" : ""}>
      {comments.length === 0 ? (
        <p className="">Non ci sono recensioni, aggiungi la tua: </p>
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
  );
};

export default CommentList;
