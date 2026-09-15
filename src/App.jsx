import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import NotFound from "./pages/notFound/NotFound";
import BookDetail from "./pages/bookDetail/BookDetail";
import { BooksProvider } from "./contexts/BooksContext";
import { CommentsProvider } from "./contexts/CommentsContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SearchBookProvider } from "./contexts/SearchBookContext";
function App() {
  return (
    <>
      <BooksProvider>
        <ThemeProvider>
          <CommentsProvider>
            <SearchBookProvider>
              <BrowserRouter>
                <Routes>
                  <Route index element={<HomePage />} />
                  <Route path="/:asin" element={<BookDetail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </SearchBookProvider>
          </CommentsProvider>
        </ThemeProvider>
      </BooksProvider>
    </>
  );
}

export default App;
