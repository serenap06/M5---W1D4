import { render, screen } from "@testing-library/react";
import { test, expect, vi, beforeEach, afterEach } from "vitest";
import AllTheBooks from "./AllTheBooks";
import { BooksContext } from "../../contexts/BooksContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { SearchBookContext } from "../../contexts/SearchBookContext";
import { MemoryRouter } from "react-router-dom";

// Dati mockati che ci aspettiamo dalla fetch API
const mockBooksFromApi = [
  {
    asin: "111111",
    title: "Libro API 1",
    price: 12.99,
    category: "fantasy",
    img: "https://via.placeholder.com/150",
  },
  {
    asin: "222222",
    title: "Libro API 2",
    price: 19.99,
    category: "fantasy",
    img: "https://via.placeholder.com/150",
  },
  {
    asin: "333333",
    title: "Libro API 3",
    price: 9.99,
    category: "fantasy",
    img: "https://via.placeholder.com/150",
  },
];

beforeEach(() => {
  // Simula la risposta HTTP positiva di fetch
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => mockBooksFromApi,
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

test("Renderizza il numero corretto di Card in base ai dati restituiti dalla fetch API", async () => {
  render(
    <MemoryRouter>
      <ThemeContext.Provider value={{ isDark: false }}>
        <SearchBookContext.Provider value={{ inputData: "" }}>
          <BooksContext.Provider
            value={{
              booksData: mockBooksFromApi,
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

  // findAllByTestId gestisce l'asincronia e attende che le card vengano disegnate nel DOM
  const bookCards = await screen.findAllByTestId("BookCard");

  // 1. Verifica che siano state create esattamente 3 card come nei dati dell'API
  expect(bookCards).toHaveLength(mockBooksFromApi.length);

  // 2. Verifica che la prima card contenga il titolo corrispondente al mock
  expect(screen.getByText("Libro API 1")).toBeInTheDocument();
});
