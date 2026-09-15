import { createContext, useState } from "react";

export const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getComments = async (asin) => {
    if (!asin) {
      setComments([]);
      return;
    }
    setIsLoading(true);
    setError("");

    const apiUrl = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`;
    const apiToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTYyNGU5OTIxMDU5ZjAwMTVlMjNhMGEiLCJpYXQiOjE3ODkzODI3ODgsImV4cCI6MTc5MDU5MjM4OH0.BAt548E0r4cJx-N2O7bpWpEx2p2Xsp_NXV8xgi6xZYI`;

    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      });
      
      const data = await response.json();
      setComments(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
      setError("Impossibile caricare i commenti");
      setComments([]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <CommentsContext.Provider
      value={{
        comments,
        setComments,
        getComments,
        isLoading,
        error,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
