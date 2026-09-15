import { useContext, useEffect } from "react";
import CommentList from "../commentList/CommentList";
import AddComment from "../addComment/AddComment";
import { CommentsContext } from "../../contexts/CommentsContext";
import { Alert, Spinner } from "react-bootstrap";

const CommentArea = ({ asinIsSelected }) => {
  const { getComments, isLoading, error } = useContext(CommentsContext);

  useEffect(() => {
    if (asinIsSelected) {
      getComments(asinIsSelected);
    }
  }, [asinIsSelected]);

  return (
    <div data-testid="CommentArea">
      {isLoading && (
        <div className="text-center my-5">
          <Spinner variant="info" animation="border"></Spinner>
          <p className="mt-2">Caricamento in corso...</p>
        </div>
      )}
      {error && !isLoading && (
        <Alert variant="danger" className="my-2">
          {error}
        </Alert>
      )}
      {!isLoading && !error && (
        <>
          <CommentList asin={asinIsSelected} />
          <AddComment asin={asinIsSelected} />
        </>
      )}
    </div>
  );
};

export default CommentArea;
