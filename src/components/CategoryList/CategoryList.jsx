import React from 'react'
import CategoryButtons from '../CategoryList/Buttons/CategoryButtons';
import CategoryImages from '../CategoryList/Buttons/CategoryImage';
import './CategoryList.css';
import Navbar from '../Navbar/Navbar';

function CategoryList() {
  return (
    <>
    <Navbar/>
      <div className="category-container">
        <div className="container mt-5 mb-5 d-flex justify-content-center">
          <h1 className="categoriesTitle">CATEGORÍAS</h1>
          {/* <div className='container d-flex justify-content-center mt-5 gap-5'>
          <button type="button" className="btn btn-primary btn-lg" id="btnVisibility" onClick={() => changeVisibility(true)}>Imagenes</button>
          <button type="button" className="btn btn-primary btn-lg" id="btnVisibility" onClick={() => changeVisibility(false)}>Botones</button>
          </div> */}
        </div>
      </div>
    <CategoryImages />
    <CategoryButtons />
    </>
  )
}

export default CategoryList;
