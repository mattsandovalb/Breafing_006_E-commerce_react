import React from "react";
import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";




function ProductDetails() {
  let findSize = (images) => {
    return images
      .find((el) => el.perspective == "front")
      .sizes.find((el) => el.size == "large").url;
  };
  const [producto, setProducto] = useState({
     title:"", img:"", price:"", qty:"", brand:""
  });
   
  useEffect(() => {
    let data = localStorage.getItem("currentItem")
    let product = JSON.parse(data)
    setProducto({ 
      img: findSize(product.images),
      title: product.description, 
      price: product.items[0].price.regular,
      qty: 1, 
    })
  }, []);

  const giveMeAccesKey = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/v1/connect/oauth2/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Autohorization: "Basc" + process.env.REACT_APP_SECREATTING,
        },
        body: "grant_type=client_credentials&scope=product.compact",
      }
    ).then((response) => response.json());

    return res.access_token;
  };

  const giveMeProductsDetails = async () => {
    const accessToken = await giveMeAccesKey();

    const productsUrl = `${
      process.env.REACT_APP_API_BASE_URL
    }/v1/products?filter.term=${"milk"}`;

    const productsResponse = fetch(productsUrl, {
      method: "GET",
      CACHE: "no-cache",
      headers: {
        Authorization: `bearer ${accessToken}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  giveMeProductsDetails();

  return (
    <div>
      <div className="general_div container-sm justify-content-center">
        <div className="img_div">
          <p className="tag">{producto.title}</p>
          <img className="rounded" src={producto.img} alt=""></img>
        </div>
        <div className=" info_div container-sm">
          <h2>{}</h2>
          <p>{}</p>
          <h3>{producto.price} €/ud.</h3>
          <hr className=""></hr>
          <div className="buy_div">
            <div className="input_div container-lg ">
              <input
                className="w-25 m-4 rounded"
                type="number"
                placeholder={1}
              ></input>
            </div>
            <div className="button_div container-lg ">
              <button className="btn-lg bg-danger text-color-white border-0 rounded-pill shadow-lg p-3 mb-5 rounded-pill ">
                AÑADIR AL CARRO
              </button>
            </div>
          </div>
        </div>
        <div className="icon_div">
          <FontAwesomeIcon className="x_icon" icon={faCircleXmark} onClick={()=>window.history.back()} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
