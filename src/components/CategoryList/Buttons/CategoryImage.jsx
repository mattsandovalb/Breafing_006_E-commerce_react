import React from "react";
import "./CategoryImage.css";
import { useState } from "react";
import { useEffect } from "react";
function CategoryImages() {
  const [show, setShow] = useState(true)

    const changeVisibility = (parametro) => {
    setShow(parametro)
    }

    const [productos, setProductos] = useState([
    ]);
 
    useEffect(() => {
        giveMeProducts()
    }, []);
    let giveMeAccessKey = async () => {
        let res = await fetch('https://api.kroger.com/v1/connect/oauth2/token', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + process.env.REACT_APP_SECRETTING
            },
            body: "grant_type=client_credentials&scope=product.compact",
        })
            .then(response => response.json()) 
        return res.access_token;
    }

    async function giveMeProducts(text) {
        let accessToken = await giveMeAccessKey()

        let productsUrl = `${"https://api.kroger.com"}/v1/products?filter.term=${text}&filter.locationId=01400441`;

        let productsResponse = fetch(productsUrl, {
            method: "GET",
            cache: "no-cache",
            headers: {
                Authorization: `bearer ${accessToken}`,
                "Content-Type": "application/json; charset=utf-8"
            }
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data.data);
                setProductos(data.data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    let findSize = (images) => {
        return images.find(el => el.perspective == "front")
            .sizes
            .find(el => el.size == "large")
            .url
    }
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
    
  return (<>
    {show && (<div className="container d-flex flex-row flex-wrap gap-5 d-none d-md-flex" id="categoryImagesContainer">
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de frutas variadas" src={"./images/Fruit.png"} onClick={() => { openCat(0)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Frutas</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de productos congelados" src={"./images/Frosted.png"} onClick={() => { openCat(1)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Congelados</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de verduras variadas" src={"./images/Veggies.png"} onClick={() => { openCat(2)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Verduras</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de pan" src={"./images/Bread.png"} onClick={() => { openCat(3)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Panaderia</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de distintos tipos de embutido" src={"./images/Sausage.png"} onClick={() => { openCat(4)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Embutido</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de pescado" src={"./images/Seafood.png"} onClick={() => { openCat(5)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Pescado</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de carnes" src={"./images/Meat.png"} onClick={() => { openCat(6)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Carnes</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de frutos secos" src={"./images/DN.png"} onClick={() => { openCat(7)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Frutos secos</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varias botellas de alcohol" src={"./images/Alcohol.png"} onClick={() => { openCat(8)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Alcohol</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios productos de cuidado personal" src={"./images/Hygiene.png"} onClick={() => { openCat(9)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Cuidado personal</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios productos precocinados" src={"./images/Premadefood.png"} onClick={() => { openCat(10)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Platos preparados</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de productos de cuidado infantil" src={"./images/Lotions.png"} onClick={() => { openCat(11)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Cuidado infantil</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de snacks(Doritos, Lays, etc)" src={"./images/Junkfood.png"} onClick={() => { openCat(12)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Snacks</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varias bebidas refrescantes" src={"./images/Soda.png"} onClick={() => { openCat(13)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Bebidas</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios tipos de legumbres" src={"./images/Beans.png"} onClick={() => { openCat(14)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Legumbres</p>
          </div>
          <div className="card border-0 mx-0">
            <img className="categoryCardImage" alt="Fotografía de varios productos de limpieza" src={"./images/Cleaning.png"} onClick={() => { openCat(15)}}></img>
            <p className="mt-4 mb-0 categoryCardText">Limpieza</p>
          </div>
        </div>)}
        
        
        </>
  );
}

export default CategoryImages;