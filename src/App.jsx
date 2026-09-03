import './App.css'
import MyFooter from './components/myFooter/MyFooter'
import MyNav from './components/myNav/MyNav'
import Welcome from './components/welcome/Welcome'
import AllTheBooks from './components/allTheBooks/AllTheBooks'
import { BooksProvider } from './contexts/BooksContext'
import { CommentsProvider } from './contexts/CommentsContext'
import { SearchBookProvider } from './contexts/SearchBookContext'
import { ThemeProvider } from './contexts/ThemeContext'


function App() {

  return (
    <BooksProvider>
      <SearchBookProvider>
        <ThemeProvider>
          <MyNav />
          <Welcome />
          <CommentsProvider>
            <AllTheBooks />
          </CommentsProvider>
          <MyFooter />
        </ThemeProvider>
      </SearchBookProvider>
    </BooksProvider>
  )
}

export default App
