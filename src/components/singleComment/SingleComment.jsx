import { Button } from "react-bootstrap";
import { Trash, Star } from "lucide-react";
import "./SingleComment.css";
import { useContext } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import { ThemeContext } from "../../contexts/ThemeContext";

const SingleComment = ({ comment, asin, rate, author, id }) => {
  const { isDark } = useContext(ThemeContext);

  const { getComments } = useContext(CommentsContext);

  const deleteComment = async () => {
    const apiToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNGU5OTIxMDU5ZjAwMTVlMjNhMGEiLCJpYXQiOjE3ODkzODI3ODgsImV4cCI6MTc5MDU5MjM4OH0.BAt548E0r4cJx-N2O7bpWpEx2p2Xsp_NXV8xgi6xZYI`;
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${apiToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.ok){
        getComments(asin)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div data-testid="SingleComment"
      className={`comment-box d-flex flex-column border-bottom py-2 ${
        isDark ? "border-secondary text-light" : "border-light-subtle text-dark"
      }`}>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold small">{author}</span>
          <Button
            className="d-flex align-items-center justify-content-center p-1"
            variant="outline-danger"
            aria-label="Elimina commento"
            size="sm"
            title="Elimina commento"
            onClick={deleteComment}
          >
            <Trash className="erase-icon m-auto p-auto" />
          </Button>
        </div>
        <p className="mb-1 text-warning">
          ({rate}/5
          <Star className="star-icon" fill="currentColor" />)
        </p>
        <p className="mb-1 small">{comment}</p>
      </div>
    </>
  );
};

export default SingleComment;
