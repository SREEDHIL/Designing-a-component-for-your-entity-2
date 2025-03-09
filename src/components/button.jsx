import React from 'react'

const ViewProductButton = () => {
  return (
    <div>
      <button onClick={()=> alert("Product Viewed !")}>
        View Product
      </button>
    </div>
  )
}

export default ViewProductButton
