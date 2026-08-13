import './App.css'
import MyFooter from './components/MyFooter/MyFooter'
import MyNav from './components/MyNav/MyNav'
import Welcome from './components/Welcome/Welcome'
import AllTheBooks from './components/AllTheBooks/AllTheBooks'


function App() {

  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks/>
      <MyFooter />
    </>
  )
}

export default App
