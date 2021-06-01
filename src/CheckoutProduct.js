import React, { forwardRef } from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

const CheckoutProduct = forwardRef(
  ({ id, title, price, rating, image, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      })
    }

    return (
      <div ref={ref} className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} />
        <div className='checkoutProduct__info'>
          <p className='checkoutProduct__title'>{title}</p>
          <div className='checkoutProduct__price'>
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
          {!hideButton && (
            <button onClick={removeFromBasket}>remove item</button>
          )}
        </div>
      </div>
    )
  }
)

export default CheckoutProduct
