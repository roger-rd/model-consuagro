import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Nosotros from './pages/Nosotros'
import Planes from './pages/Planes'
import Galeria from './pages/Galeria'
import Contacto from './pages/Contacto'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros"  element={<Nosotros />} />
          <Route path="/planes"    element={<Planes />} />
          <Route path="/galeria"   element={<Galeria />} />
          <Route path="/contacto"  element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
