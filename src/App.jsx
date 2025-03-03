import NavBar from "./components/navBar/NavBar"
import Footer from './components/footer/Footer'
// import HomePage from '../src/components/home/HomePage'
import Agenda from "./components/schedule/Agenda"

const App = () => {
  return (
    <>
      <NavBar />      
      <Agenda />
      <Footer />
    </>
  )
}

export default App