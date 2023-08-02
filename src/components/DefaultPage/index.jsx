import Cabecalho from 'components/Cabecalho'
import Container from 'components/Container'
import Rodape from 'components/Rodape'
import FavoritosProvider from 'contextos/Favoritos'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DefaultPage({ children }) {
  return (
    <>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
          {children}
        </Container>
        <Rodape />
      </FavoritosProvider>
    </>
  )
}
