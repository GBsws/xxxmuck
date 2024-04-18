import './style.css'

export const ProductPage=({image,name, id})=>{
  <>
  <div id={id} className="pp_container">
    <div className="pp_left">
     <img src={image}/>
     </div>
    <div className="pp_right">
    <h2>{name}</h2>
    <button>Objednat</button>
    </div>
   </div>
  </>
}
