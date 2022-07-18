import { useEffect } from "react";
import { useState } from "react"

const ItemContainer = () => {
    const [inicial, setInicial] = useState (1)
    const [comprar, SetComprar] = useState (false)
  
    function handleClick () {
      setInicial (inicial + 1);
  
    }
  

    function restaCount () {
      setInicial (inicial - 1);
    }

    function handleComprar (){
      SetComprar(!comprar)
      console.log(inicial)
    }
  
    return (
        <>
        <button onClick={handleClick}> + </button>
        <button onClick={restaCount}> - </button>
        <p> Total: {inicial}</p>
        <br />
        <button onClick={handleComprar}> Agregar al Carrito </button>
        </>
  )
}

export default ItemContainer