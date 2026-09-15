import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { useState } from "react";
import SingleBook from "./SingleBook";
import { ThemeContext } from "../../contexts/ThemeContext";
import { MemoryRouter } from "react-router-dom";

// Componente Wrapper per simulare la gestione dello stato asinIsSelected
const TestBookWrapper = ({ books }) => {
  const [selectedAsin, setSelectedAsin] = useState("");

  const handleShowComments = (book) => {
    setSelectedAsin(book.asin);
  };

  return (
    <ThemeContext.Provider value={{ isDark: false }}>
      {books.map((book) => (
        <SingleBook
          key={book.asin}
          book={book}
          asinIsSelected={selectedAsin}
          showComments={handleShowComments}
        />
      ))}
    </ThemeContext.Provider>
  );
};

const mockBooks = [
  {
    asin: "101",
    title: "Primo Libro",
    price: 10,
    category: "fantasy",
    img: "img1.jpg",
  },
  {
    asin: "102",
    title: "Secondo Libro",
    price: 15,
    category: "fantasy",
    img: "img2.jpg",
  },
];

test("5. Modifica il bordo del libro selezionato al click aggiungendo la classe 'border-danger'", () => {
  render(
    <MemoryRouter>
      <TestBookWrapper books={mockBooks} />
    </MemoryRouter>,
  );

  const cards = screen.getAllByTestId("BookCard");
  const firstCard = cards[0];

  // Prima del click la card non ha il bordo di selezione
  expect(firstCard).not.toHaveClass("border-danger");

  // Simula il click sul primo libro
  fireEvent.click(firstCard);

  // Verifica che la prima card abbia acquisito la classe del bordo rosso
  expect(firstCard).toHaveClass("border-danger");
});

test("6. Ripristina il bordo del primo libro al suo stato normale quando viene cliccato un secondo libro", () => {
  render(
    <MemoryRouter>
      <TestBookWrapper books={mockBooks} />
    </MemoryRouter>,
  );

  const cards = screen.getAllByTestId("BookCard");
  const firstCard = cards[0];
  const secondCard = cards[1];

  // 1. Click sul primo libro
  fireEvent.click(firstCard);
  expect(firstCard).toHaveClass("border-danger");
  expect(secondCard).not.toHaveClass("border-danger");

  // 2. Click sul secondo libro
  fireEvent.click(secondCard);

  // 3. Il primo libro perde la classe border-danger, il secondo la acquisisce
  expect(firstCard).not.toHaveClass("border-danger");
  expect(secondCard).toHaveClass("border-danger");
});
