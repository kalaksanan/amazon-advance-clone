import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://i.imgur.com/SYHeuYM.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            id='2132311'
            title='
Apple MacBook Air MJVM2LL/A 11.6 Inch Laptop (Intel Core i5 Dual-Core 1.6GHz up to 2.7GHz, 4GB RAM, 128GB SSD, Wi-Fi, Bluetooth 4.0, Integrated Intel HD Graphics 6000'
            price={399.0}
            rating={5}
            image='https://m.media-amazon.com/images/I/91wYB53Y4aL._AC_UY218_.jpg'
          />
          <Product
            id='2132312'
            title='Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6" Full HD IPS Display, 8GB DDR4, 256GB'
            price={649.99}
            rating={5}
            image='https://m.media-amazon.com/images/I/71s1LRpaprL._AC_UL320_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            id='2132313'
            title='LAMAZE Peek-A-Boo Forest'
            price={19.99}
            rating={5}
            image='https://m.media-amazon.com/images/I/51G8LfsNZzL._AC_SY200_.jpg'
          />
          <Product
            id='2132314'
            title='Playstation DualSense Wireless Controller'
            price={67.45}
            rating={5}
            image='https://m.media-amazon.com/images/I/612bjwBuobS._AC_UY218_.jpg'
          />
          <Product
            id='2132315'
            title="Amazon Essentials Men's Regular-fit Quick-Dry Golf Polo Shirt"
            price={16.9}
            rating={4}
            image='https://m.media-amazon.com/images/I/91l+qgD99GL._AC_UL320_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            id='2132316'
            title='SAMSUNG 86-Inch Class Crystal UHD TU9000 Series - 4K UHD HDR Smart TV '
            price={237.99}
            rating={5}
            image='https://m.media-amazon.com/images/I/91CePgmlPPL._AC_UL320_.jpg'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
