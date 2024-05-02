import './style.css'
import { useParams } from 'react-router-dom'
import {useState, useEffect } from 'react'


export const ProductDetail = ()=>{
  const [products,setProducts] = useState([])
  const {productId} = useParams()
  const product = products.find((item) => item.id === productId);
  console.log(product)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
      const data = await response.json()
      console.log(data)
      setProducts(data);
    }

    fetchProducts()
  }, []);

    if (product===null){
      return <div>Loading...</div>

    }
    return (
      <div className='product_detail'>
        {product && (
          <>
            <picture className='pd_pic'>
              <img className='pd_img' src={product.image} alt={product.name} />
            </picture>
            <div className='pd_desc'>
              <p className='pd_title'>{product.name}</p>
              <button className='pd_button'>Objednat</button>
            </div>
          </>
        )}
      </div>)
}
