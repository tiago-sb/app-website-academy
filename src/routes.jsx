import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home/HomePage'
import Instrutores from './components/about/teaches/Instrutores'
import Precos from './components/about/price/Preco'
import Agenda from './components/schedule/Agenda'
import Contato from './components/contact/Contato'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre/instrutores" element={<Instrutores />} />
        <Route path="/sobre/precos" element={<Precos />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
