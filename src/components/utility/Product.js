import React from 'react'
import './Product.css'

function Product({ icon, children }) {
  return (
    <div className='product'>
      <div className='product-icon'>
        <img src={"/icons/" + icon} alt={icon} />
      </div>
      <div className='product-name'>
        {children}
      </div>
    </div>
  )
}

export default Product