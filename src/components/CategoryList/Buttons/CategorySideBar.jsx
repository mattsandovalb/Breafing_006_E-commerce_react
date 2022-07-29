function CategorySideBar() {
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
        <nav className="d-flex flex-column align-items-start m-2">
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(0)}>Frutas</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(1)}>Congelados</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(2)}>Verduras</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(3)}>Panaderias</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(4)}>Embutidos</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(5)}>Pescado</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(6)}>Carnes</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(7)}>Frutos secos</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(8)}>Alcohol</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(9)}>Higiene</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(10)}>Preparados</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(11)}>Bebes</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(12)}>Snacks</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(13)}>Bebidas</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(14)}>Legumbres</button>
            <button type="button" className="btn btn-outline-dark rounded-pill" onClick={() => openCat(15)}>Limpieza</button>
        </nav>
    )
}

export default CategorySideBar;