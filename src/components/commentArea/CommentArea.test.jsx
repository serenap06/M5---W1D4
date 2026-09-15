import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import CommentArea from "./CommentArea";
import { CommentsContext } from "../../contexts/CommentsContext";
import { ThemeContext } from "../../contexts/ThemeContext";

test("Renderizza correttamente il componente CommentArea con le recensioni e il form di aggiunta", () => {
  const mockComments = [
    {
      _id: "c1",
      comment: "Ottima lettura consigliata!",
      rate: "5",
      elementId: "12345",
      author: "Mario Rossi",
    },
  ];

  render(
    <ThemeContext.Provider value={{ isDark: false }}>
      <CommentsContext.Provider
        value={{
          comments: mockComments,
          isLoading: false,
          isError: false,
          getComments: vi.fn(),
        }}
      >
        <CommentArea asin="12345" />
      </CommentsContext.Provider>
    </ThemeContext.Provider>,
  );

  // 1. Verifica che il container principale di CommentArea sia presente tramite data-testid
  const commentArea = screen.getByTestId("CommentArea");
  expect(commentArea).toBeInTheDocument();

  // 2. Verifica che il form di inserimento del commento (AddComment) sia presente
  expect(
    screen.getByPlaceholderText(/inserisci il tuo commento/i),
  ).toBeInTheDocument();

  // 3. Verifica che il testo della recensione fittizia venga mostrato a schermo
  expect(screen.getByText("Ottima lettura consigliata!")).toBeInTheDocument();
});

test("8. Carica e mostra correttamente le recensioni SingleComment nel DOM quando presenti", () => {
  // Dati di mock per simulare le recensioni ricevute dall'API
  const mockComments = [
    {
      _id: "c1",
      comment: "Bellissimo libro!",
      rate: "5",
      elementId: "12345",
      author: "Mario Rossi",
    },
    {
      _id: "c2",
      comment: "Consigliatissimo!",
      rate: "4",
      elementId: "12345",
      author: "Luigi Verdi",
    },
  ];

  render(
    <ThemeContext.Provider value={{ isDark: false }}>
      <CommentsContext.Provider
        value={{
          comments: mockComments,
          isLoading: false,
          isError: false,
          getComments: vi.fn(),
        }}
      >
        <CommentArea asin="12345" />
      </CommentsContext.Provider>
    </ThemeContext.Provider>,
  );

  // 1. Recupera tutte le istanze di SingleComment generate nel DOM
  const singleComments = screen.getAllByTestId("SingleComment");

  // 2. Verifica che siano stati renderizzati esattamente 2 commenti
  expect(singleComments).toHaveLength(2);

  // 3. Verifica che i testi dei commenti siano visibili
  expect(screen.getByText("Bellissimo libro!")).toBeInTheDocument();
  expect(screen.getByText("Consigliatissimo!")).toBeInTheDocument();
});
