import './style.css'

export const Product=({name,image})=>{
  return(<>
  <div className="product_container">
    <div className="product_left">
        <img className="product_image" src={image} alt={name}/>
     </div>
    <div className="product_right">
    <h2 className="product_name">{name}</h2>
    </div>
   </div>
  </>)
}  

