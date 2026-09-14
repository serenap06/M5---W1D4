import MyNav from "./../../components/myNav/MyNav"
import Welcome from "./../../components/welcome/Welcome";
import AllTheBooks from "./../../components/AllTheBooks/AllTheBooks";
import MyFooter from "./../../components/myFooter/MyFooter"

const HomePage = () => {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  )
}
export default HomePage;