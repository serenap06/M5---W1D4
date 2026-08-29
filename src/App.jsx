import './App.css'
import MyFooter from './components/myFooter/MyFooter'
import MyNav from './components/myNav/MyNav'
import Welcome from './components/welcome/Welcome'
import AllTheBooks from './components/allTheBooks/AllTheBooks'


function App() {

  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  )
}

export default App
