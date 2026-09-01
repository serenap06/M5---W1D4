import './App.css'
import MyFooter from './components/myFooter/MyFooter'
import MyNav from './components/myNav/MyNav'
import Welcome from './components/welcome/Welcome'
import AllTheBooks from './components/allTheBooks/AllTheBooks'
import { BooksProvider } from './contexts/BooksContext'
import { CommentsProvider } from './contexts/CommentsContext'


function App() {

  return (
    <BooksProvider>
      <MyNav />
      <Welcome />
      <CommentsProvider>
        <AllTheBooks />
        </CommentsProvider>
      <MyFooter />
    </BooksProvider>
  )
}

export default App
