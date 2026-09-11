import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './components/pages/homePage/HomePage';
import NotFound from './components/pages/notFound/NotFound';
import BookDetail from './components/pages/bookDetail/BookDetail';
import { BooksProvider } from './contexts/BooksContext';
import { CommentsProvider } from './contexts/CommentsContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { SearchBookProvider } from './contexts/SearchBookContext';
function App() {

  return (
    <>
      <BooksProvider>
        <ThemeProvider>
          <CommentsProvider>
            <SearchBookProvider>
              <BrowserRouter>
                <Routes>
                  <Route
                    index
                    element={<HomePage />}
                  />
                  <Route
                    path='/:asin'
                    element={<BookDetail />}
                  />
                  <Route
                    path='*'
                    element={<NotFound />}
                  />
                </Routes>
              </BrowserRouter>
            </SearchBookProvider >
          </CommentsProvider>
        </ThemeProvider>
      </BooksProvider>
      </>
      )
}

      export default App
