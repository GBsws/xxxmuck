import { Header } from '../../components/Header/Header';
import './style.css';
import { Description } from '../../components/Description/Description';
import { useState, useEffect} from "react"
import { Product } from '../../components/Product/Product';

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
  return (
    <>
    <div className="container">
       <header>
         <Header />
       </header>
         <Description />
       <main>
        <ul className="list">
        {products.map(item=><Product {...item}/>
          )}
          </ul>
        </main> 
        
        
        <footer>
         <p>Czechitas, Digitální akademie: Web</p>
       </footer>
     </div>
    </>
  );
};

// {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title} {...conceptItem} />)} 
