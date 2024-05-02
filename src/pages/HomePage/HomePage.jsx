import './style.css';
import { Description } from '../../components/Description/Description';
import { useState, useEffect} from "react"
import { Product } from '../../components/Product/Product';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [ products, setProducts] = useState([])

  useEffect(()=>{
     const fetchData = async ()=> {
       const response = await fetch ('https://apps.kodim.cz/react-2/xxxmuck/products')
       const data = await response.json()
       setProducts(data)
       console.log(data)
     }
     fetchData();
    }, [])

   if (products ===null) {
    return <div>Loading...</div>
   }
  return (
    <>
    <div className="container">
       <main>
         <Description />
      
        <div className="list">
        {products &&
        products.map(({id,name,image})=>{
          return (
            <Link to={`/product/${id}`} key={id}>
              <Product id={id} name={name} image={image}/>
            </Link>
              )})}
          </div>
        </main> 
      </div>
        
        <footer>
         <p>Czechitas, Digitální akademie: Web</p>
       </footer>
    
    </>
  );
;
}
