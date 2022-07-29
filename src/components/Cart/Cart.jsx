import React, { useState, useEffect } from 'react'
import '../Cart/Cart.css'
import { FaTrash } from 'react-icons/fa'
import './Cart.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
const Cart = () => {
  const [cart, setCart] = useState([
  ])

  useEffect(() => {
    let cart = localStorage.getItem('cart')
    if (cart == null) {
      localStorage.setItem('cart', '[]')
      cart = []
    } else {
      cart = JSON.parse(cart)
    }

    setCart(cart)
  }, [])
  const handleClick = (item) => {
    console.log(item)
  }
  const restaMeLo = (id) => {
    let arr = [...cart]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        arr[i].qty = arr[i].qty - 1
        if (arr[i].qty < 0) {
          arr[i].qty = 0
        }
      }
    }
    setCart(arr)
    saveData()
  }
  const plusBtn = (id) => {
    let arr = [...cart]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        arr[i].qty = arr[i].qty + 1

        if (arr[i].qty > 20) {
          arr[i].qty = 20
        }
      }
    }
    setCart(arr)
    saveData()
  }
  const deleteBtn = (id) => {
    let arr = [...cart]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        arr[i].qty = 0
      }
    }
    setCart(arr)
    saveData()
  }
  const calculatePrice = (id) => {
    let arr = [...cart]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        // return arr[i].qty * parseFloat(arr[i].price.replace(",", "."));
        return parseFloat(arr[i].qty * arr[i].price).toFixed(2)
      }
    }
  }
  const saveData = () => {
    let carti = JSON.stringify(cart)
    localStorage.setItem('cart', carti)
  }
  const cleanCart = () => {
    localStorage.setItem('cart', '[]')
    window.location.reload()
    return false
  }

  const calculateAll = () => {
    let arr = [...cart]
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
      counter += parseFloat(calculatePrice(arr[i].id))
    }
    return counter.toFixed(2)
  }

  const whatsappFunction = () => {
    let arr = [...cart]
    let text = 'Productos:'
    let index = 1
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].qty > 0) {
        text += `%0A *${index++}*. ${arr[i].title} x${
          arr[i].qty
        } = ${calculatePrice(arr[i].id)}  `
      }
    }
    let todo = calculateAll()
    text += `%0A Total: ${todo} `
    let number = '34662584188'
    let link = `https://wa.me/${number}?text=${text}`

    window.open(link)
  }
  return (
    <>
      <Navbar />
      <div className='container'>
        
      <br />
      <div>
        <input
          className="button btn-primary"
          onClick={() => cleanCart()}
          type="button"
          value=" Vaciar Carro "
        />
        {/* <button className="btn btn-primary"> Clean Cart</button> */}
      </div>
      <br />
      {cart.map((item) => {
        return (
          item.qty != 0 && (
            <div key={item.title} className="item">
              <div className="card-m-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <Link to="/ProductDetails">
                        <img className="img-product" src={item.img} />
                      </Link>
                    </div>
                    <div className="col-7 my-box">
                      <h2 className="heading">{item.title}</h2>
                      <p className="cantidad">${item.price}</p>

                      <div className="boxNumber">
                        <button onClick={() => restaMeLo(item.id)}>-</button>
                        <input
                          class="numberstyle"
                          type="number"
                          min="1"
                          step="1"
                          max="10"
                          value={item.qty}
                          readOnly
                        ></input>
                        <button onClick={() => plusBtn(item.id)}>+</button>
                      </div>
                    </div>
                    <div className="col-2 my-trashBox">
                      <FaTrash
                        className="trash-icon"
                        onClick={() => deleteBtn(item.id)}
                      />
                      {/* <h3 className="euro">{item.price}</h3> */}
                      <h3 className="euro">{calculatePrice(item.id)}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )
      })}
      <h1>Total: {calculateAll()}</h1>

      <button className="button btn-success" onClick={whatsappFunction}>
        <i className="fa-brands fa-whatsapp"></i> Comprar por Whatssap
      </button>
      
      </div>
    </>
  )
}
export default Cart
