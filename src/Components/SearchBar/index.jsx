import React from 'react'
import { useContext } from 'react'
import { ProductListContext } from '../../Contexts/productList'
import { SearchContainer } from './style'
import {FiSearch} from 'react-icons/fi'

export const SearchBar = () => {
  const {setInput} = useContext(ProductListContext)
  
  return (
    <SearchContainer>
      <FiSearch size={20} color={"#946A56"}/>
      <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Procure seu Livro' />
    </SearchContainer>
  )
}
