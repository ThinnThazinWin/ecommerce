import Link from 'next/link'
import React from 'react'


function ProductItem({product, addToCartHandler}) {
  return (
    <div className='card'>
      <Link href={`/product/${product.slug}`}>
      <img 
      src={product.image}
      alt={product.image}
      className='rounded shadow'
      />
      </Link>

      <div className='flex flex-col items-center justify-between p-5'>
        <Link href={`/product/${product.slug}`}>
        <h2 className='text-lg'>{product.name}</h2>
        </Link>
        <p className='mb-2'>{product.brand}</p>
        <p className='mb-2'>${product.price}</p>
        <button className='primary-button' type='button' onClick={() => addToCartHandler(product)}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductItem
