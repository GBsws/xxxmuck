export const Product=({id,name,image})=>{
  return(<li id={id}>
    <img src={image} width={50}/>
    <p>{name}</p></li>)
}  

