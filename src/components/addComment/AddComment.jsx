import { Form, Button } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import { ThemeContext } from "../../contexts/ThemeContext";

const AddComment = ({ asin }) => {
  const { getComments } = useContext(CommentsContext);
  const { isDark } = useContext(ThemeContext);

  const [isSent, setIsSent] = useState(false);
  const [inputComment, setInputComment] = useState({
    comment: "",
    rate: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputComment({
      ...inputComment,
      elementId: `${asin}`,
      [name]: value,
    });
  };

  useEffect(() => {
    setInputComment({
      comment: "",
      rate: "",
    });
  }, [asin]);

  const onSubmitComment = async (e) => {
    e.preventDefault();
    const apiToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNGU5OTIxMDU5ZjAwMTVlMjNhMGEiLCJpYXQiOjE3ODkzODI3ODgsImV4cCI6MTc5MDU5MjM4OH0.BAt548E0r4cJx-N2O7bpWpEx2p2Xsp_NXV8xgi6xZYI`;

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputComment),
        },
      );

      if (!response.ok) {
        throw new Error("Impossibile inviare la recensione.");
      }

      setIsSent(!isSent);
      setInputComment({
        comment: "",
        rate: "",
      });
      getComments(asin);

      setTimeout(() => {
        setIsSent(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={onSubmitComment} className="mt-3 w-100">
      <Form.Group className="d-flex flex-column gap-2 w-100">
        <Form.Control
          className="w-100"
          value={inputComment.comment}
          onChange={onChangeInput}
          type="text"
          placeholder="Inserisci il tuo commento..."
          name="comment"
          req
          uired
        ></Form.Control>
        <Form.Control
          className="w-100"
          value={inputComment.rate}
          onChange={onChangeInput}
          type="number"
          min="1"
          max="5"
          name="rate"
          placeholder="Valutazione (da 1 a 5)"
          required
        ></Form.Control>
        <Button
          type="submit"
          className={`mt-2 w-100 fw-bold ${!isDark ? "text-white" : ""}`}
          variant={isSent ? "success" : isDark ? "light" : "info"}
        >
          {isSent ? "Commento inviato" : "Invia commento"}
        </Button>
      </Form.Group>
    </Form>
  );
};
export default AddComment;
