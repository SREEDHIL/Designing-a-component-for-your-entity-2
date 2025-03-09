import React from 'react'
import ViewProductButton from './button';

const productcard = () => {
    
    const productImage = "https://i.pinimg.com/736x/44/8e/7a/448e7ad06d1606eaaa875613c72419ac.jpg";
    const productName = "Mclaren Senna";
    const productPrice = "£750,000";
  
    return (
    <div>
      <img src={productImage} alt={productName} />
      <h3>{productName}</h3>
      <p>{productPrice}</p>
      <ViewProductButton/>
    </div>
  )
}

export default productcard

