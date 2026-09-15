import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import AllTheBooks from "./../allTheBooks/AllTheBooks";
import SearchBar from "./SearchBar";
import { BooksContext } from "../../contexts/BooksContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { SearchBookContext } from "../../contexts/SearchBookContext";
import { MemoryRouter } from "react-router-dom";

// Dati di prova per simulare il catalogo libri
const mockBooks = [
  {
    asin: "1",
    title: "The Lord of the Rings",
    price: 15,
    category: "fantasy",
    img: "img1.jpg",
  },
  {
    asin: "2",
    title: "Harry Potter",
    price: 20,
    category: "fantasy",
    img: "img2.jpg",
  },
  {
    asin: "3",
    title: "The Hobbit",
    price: 12,
    category: "fantasy",
    img: "img3.jpg",
  },
];

test("Disegna solo i libri il cui titolo contiene la parola cercata nell'input", () => {
  // Simuliamo una ricerca in cui l'utente ha digitato 'Lord'
  const searchInputText = "Lord";

  // Filtriamo i libri in base alla parola chiave digitata
  const filteredBooks = mockBooks.filter((book) =>
    book.title.toLowerCase().includes(searchInputText.toLowerCase()),
  );

  render(
    <MemoryRouter>
      <ThemeContext.Provider value={{ isDark: false }}>
        <SearchBookContext.Provider
          value={{
            inputData: searchInputText,
            onChangeInput: vi.fn(),
            onSearch: vi.fn(),
          }}
        >
          <BooksContext.Provider
            value={{
              booksData: filteredBooks,
              isLoading: false,
              error: null,
            }}
          >
            <AllTheBooks showComments={vi.fn()} asinIsSelected="" />
          </BooksContext.Provider>
        </SearchBookContext.Provider>
      </ThemeContext.Provider>
    </MemoryRouter>,
  );

  // 1. Verifica che la card corrispondente a "The Lord of the Rings" sia presente
  expect(screen.getByText("The Lord of the Rings")).toBeInTheDocument();

  // 2. Verifica che i libri non pertinenti NON siano nel DOM
  expect(screen.queryByText("Harry Potter")).not.toBeInTheDocument();

  // 3. Verifica che il numero di card a schermo sia esattamente 1
  const cards = screen.getAllByTestId("BookCard");
  expect(cards).toHaveLength(1);
});

test("Chiama la funzione onChangeInput quando l'utente digita nel campo SearchBar", () => {
  const handleChange = vi.fn();

  render(
    <ThemeContext.Provider value={{ isDark: false }}>
      <SearchBookContext.Provider
        value={{
          inputData: "",
          onChangeInput: handleChange,
          onSearch: vi.fn(),
        }}
      >
        <SearchBar />
      </SearchBookContext.Provider>
    </ThemeContext.Provider>,
  );

  const inputElement = screen.getByPlaceholderText(/cerca il tuo libro/i);

  // Simula la digitazione dell'utente
  fireEvent.change(inputElement, { target: { value: "Hobbit" } });

  // Verifica che la funzione del context sia stata invocata
  expect(handleChange).toHaveBeenCalledTimes(1);
});
