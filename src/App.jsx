import NavBar from "./components/navBar/NavBar"
import Footer from './components/footer/Footer'
import Preco from "./components/about/price/Preco"
// import Instrutores from "./components/about/teaches/Instrutores"
// import Contato from "./components/contact/Contato"
// import HomePage from '../src/components/home/HomePage'
// import Agenda from "./components/schedule/Agenda"

const App = () => {
  return (
    <>
      <NavBar />
      <Preco />
      <Footer />
    </>
  )
}

export default App