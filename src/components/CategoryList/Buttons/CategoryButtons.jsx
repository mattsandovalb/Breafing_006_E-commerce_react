import React from 'react';
import './CategoryButtons.css'

function CategoryButtons() {
  function openCat(query) {
    let arr = [
        "fruits",
        "frozen",
        "Vegetables",
        "Bakeries",
        "sausages",
        "Fish",
        "meats",
        "Nuts",
        "Alcoholic beverages",
        "Personal care",
        "Ready meals",
        "Childcare",
        "snacks",
        "Beverages",
        "Legumes",
        "Cleaning",
    ]
    window.open("/Category/" + arr[query], "_self")

}
  return (
    <>
    <div className='container' id="categoryButtonsContainer">
      <div className='d-flex flex-column flex-start p-4 gap-3 d-lg-none'>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(0)}}>Frutas</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(1)}}>Congelados</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(2)}}>Verduras</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(3)}}>Panaderias</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(4)}}>Embutidos</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(5)}}>Pescado</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(6)}}>Carnes</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(7)}}>Frutos secos</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(8)}}>Bebidas alcoholicas</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(9)}}>Cuidado personal</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(10)}}>Platos preparados</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(11)}}>Cuidado infantil</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(12)}}>Snacks</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(13)}}>Bebidas</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(14)}}>Legumbres</button>
        <button type="button" className="btn btn-outline-dark rounded-pill" id="categoryBtn" onClick={() => { openCat(15)}}>Limpieza</button>
      </div>
    </div>
    </>
  )
}

export default CategoryButtons;