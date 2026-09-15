import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Welcome from "./Welcome";
import { BooksContext } from "../../contexts/BooksContext";
import { ThemeContext } from "../../contexts/ThemeContext";

test("Renderizza correttamente il testo di benvenuto e il conteggio dei libri dal Context", () => {
  // Dati fittizi per simulare il Context
  const mockBooks = [
    { asin: "123", title: "Libro 1" },
    { asin: "456", title: "Libro 2" },
    { asin: "789", title: "Libro 3" },
  ];

  render(
    <ThemeContext.Provider value={{ isDark: false }}>
      <BooksContext.Provider value={{ booksData: mockBooks }}>
        <Welcome />
      </BooksContext.Provider>
    </ThemeContext.Provider>,
  );

  // 1. Verifica che il testo di benvenuto sia presente
  const welcomeText = screen.getByText(/Benvenuto su/i);
  expect(welcomeText).toBeInTheDocument();

  // 2. Verifica che il conteggio dei libri rispecchi la lunghezza dell'array nel Context (3)
  const badgeCount = screen.getByText("3");
  expect(badgeCount).toBeInTheDocument();
});

test("Gestisce in sicurezza il caricamento con array libri vuoto o undefined", () => {
  render(
    <ThemeContext.Provider value={{ isDark: true }}>
      <BooksContext.Provider value={{ booksData: [] }}>
        <Welcome />
      </BooksContext.Provider>
    </ThemeContext.Provider>,
  );

  // Verifica che con 0 libri mostri "0" e non vada in crash
  const zeroCount = screen.getByText("0");
  expect(zeroCount).toBeInTheDocument();
});
