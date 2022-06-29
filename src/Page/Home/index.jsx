import React from 'react'
import { Header } from '../../Components/Header'
import { ProductList } from '../../Components/ProductList'
import { SearchBar } from '../../Components/SearchBar'
import { Container } from './style'

export const HomePage = () => {
  return (
    <Container>
      <Header/>
      <SearchBar/>
      <ProductList/>
    </Container>
  )
}
