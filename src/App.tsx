import Footer from './components/Footer'
import Formulario from './components/Formulario'
import Header from './components/Header'
import MainSection from './components/MainSection'
import Portfolio from './components/Portfolio'
import Processos from './components/Processos'
import SectionServices from './components/SectionServices'
import Testimonials from './components/Testimonials'
import './styles/App.css'

function App() {
  return (
    <div className='App'>
           <Header />
           <MainSection />
           <SectionServices />
           <Testimonials />
           <Portfolio />
           <Processos />
           <Formulario />
           <Footer />
    </div>
  )
}

export default App
