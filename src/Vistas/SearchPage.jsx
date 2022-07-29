import React from 'react'
import ProductList from '../components/ProductList/ProductList'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'
import CategorySideBar from '../components/CategoryList/Buttons/CategorySideBar'

function SearchPage() {
  const { id } = useParams();

  return (
    <div>
    <Navbar search={id} />
    <div className="row">
      <div className="col-sm-4 col-md-2 col-lg-2">
        <CategorySideBar />
      </div>
      <div className="col">
        <h1>Resultados de {id}:</h1>
        <ProductList query={id}></ProductList>
      </div>
    </div>
  </div>
  )
}

export default SearchPage