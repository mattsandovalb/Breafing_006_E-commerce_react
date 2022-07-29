import React, { useState, useEffect } from "react";
import "./ProductList.css";

function ProductList({query}) {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    giveMeProducts();
  }, []);
  let giveMeAccessKey = async () => {
    let res = await fetch("https://api.kroger.com/v1/connect/oauth2/token", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + process.env.REACT_APP_SECRETTING,
      },
      body: "grant_type=client_credentials&scope=product.compact",
    }).then((response) => response.json());
    return res.access_token;
  };

  let giveMeProducts = async () => {
    let accessToken = await giveMeAccessKey();

    // let accessToken = "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2…M4FMOeoadvGfDvZq1YY2YlDsBmgtBE3wR3c2eUro5xJlv3r8w";
    let productsUrl = `${"https://api.kroger.com"}/v1/products?filter.term=${query}&filter.locationId=01400441`;

    let productsResponse = fetch(productsUrl, {
      method: "GET",
      cache: "no-cache",
      headers: {
        Authorization: `bearer ${accessToken}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.data);
        setProductos(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  let findSize = (images) => {
    return images
      .find((el) => el.perspective == "front")
      .sizes.find((el) => el.size == "large").url;
  };
  // giveMeAccessKey()

  // ?filter.term=milk&filter.locationId=70381054&filter.limit=6&filter.category=Diary

  const addToCart = (product) => {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
      localStorage.setItem("cart", "[]");
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }

    if (cart.find((el) => el.description == product.description)) {
      return;
    }

    cart.push({
      id: product.description,
      img: findSize(product.images),
      title: product.description,
      subtitle: product.description,
      price: product.items[0].price.regular,
      qty: 1,
    });
    cart = JSON.stringify(cart);
    localStorage.setItem("cart", cart);
  };

  const storeData = (prod) => {
    let stringy = JSON.stringify(prod);
    localStorage.setItem("currentItem", stringy);
    window.open("/ProductDetails", "_self")
  };

  return (
    <div>
      <div className="row">
        {(productos.length<1 &&
          <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="" />
        )}

        {productos.map((product) => {
          return (
            <div
              className="col-sm-6  col-md-4 col-lg-3d-flex justify-content-around "
              key={product.description}
            >
              <div className="card product d-flex align-items-center">
                {/* <img className='image' src={"./images/milk.png"}></img> */}
                {/* <Link to="/ProductDetails"><img className="image" src={findSize(product.images)}></img></Link> */}
                <img
                  className="image"
                  onClick={() => storeData(product)}
                  src={findSize(product.images)}
                ></img>

                <div className="body">
                  <p className="title">{product.description}</p>
                  <p className="price">${product.items[0].price.regular}</p>
                  <div className="d-flex justify-content-around align-items-center">
                    <span className="text-muted">{product.categories[2]}</span>
                    {/* <span className='price'>{"product.price"}</span> */}
                  </div>
                </div>
                <div className="cart">
                  <i
                    className="fa-solid fa-cart-plus"
                    onClick={() => addToCart(product)}
                  ></i>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
