import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Home from './components/home/HomePage'
import Instrutores from './components/about/teaches/Instrutores'
import Precos from './components/about/price/Preco'
import Agenda from './components/schedule/Agenda'
import Contato from './components/contact/Contato'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = { <Home /> }  path="/" exact />
        <Route element = { <Instrutores /> }  path="/sobre/instrutores" exact />
        <Route element = { <Precos /> } path="/sobre/precos" exact />
        <Route element = { <Agenda /> }  path="/agenda" exact />
        <Route element = { <Contato /> }  path="/contato" exact />  
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas