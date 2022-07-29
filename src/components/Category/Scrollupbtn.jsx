import React, { useState, useEffect } from 'react'
import './Scrollupbtn.css'

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 330) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  let goTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    (showTopBtn && <div className="button-thing">
      <button onClick={goTop}>
        <div className="arrow-container">
          <i id="arrow-up" className="fa-solid fa-arrow-up"></i>
        </div>
      </button>
    </div>
    )
  )
}

export default ScrollToTop
