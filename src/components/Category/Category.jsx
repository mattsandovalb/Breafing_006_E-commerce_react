import React from 'react'
import CategorySideBar from '../CategoryList/CategorySideBar';
import ProductList from '../ProductList/ProductList';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Category() {
  const { id } = useParams();

  return (
    <h1>
       <Navbar/>
      <div className="row"> 
        <div className="col-sm-4 col-md-2 col-lg-2"> 
          <CategorySideBar />
        </div>
        <div className="col">   
          <ProductList query={id}></ProductList>
        </div>
      </div>
    </h1>
  )
}

export default Category;
