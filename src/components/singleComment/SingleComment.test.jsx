import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import CommentArea from "../CommentArea/CommentArea";
import { CommentsContext } from "../../contexts/CommentsContext";
import { ThemeContext } from "../../contexts/ThemeContext";

test("7. All'avvio non deve essere presente alcuna istanza del componente SingleComment nel DOM", () => {
  render(
    <ThemeContext.Provider value={{ isDark: false }}>
      <CommentsContext.Provider
        value={{
          comments: [], // Nessun commento presente all'avvio
          isLoading: false,
          isError: false,
          getComments: () => {},
        }}
      >
        <CommentArea asin="" />
      </CommentsContext.Provider>
    </ThemeContext.Provider>
  );

  // queryAllByTestId restituisce un array vuoto anziché sollevare un'eccezione
  const singleComments = screen.queryAllByTestId("SingleComment");
  
  // Verifica che la lunghezza sia esattamente 0
  expect(singleComments).toHaveLength(0);
});