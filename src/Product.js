import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue()
  console.log('this is the basket>>', basket)
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    })
  }
  return (
    <div key={id} className='product'>
      <div className='product__info'>
        <p className='product__title'>{title}</p>
        <div className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((rating) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className='product__image' src={image} alt='' />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
