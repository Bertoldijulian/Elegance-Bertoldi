import ItemDetail from "./ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { prodRemeras } from "../ItemList/productos"


const ItemDetailContainer = () => {
    const [remeras, setRemeras] = useState([])

    useEffect (() => {
        prodRemeras(1)
        .then(respuesta => setRemeras(respuesta))
        .catch(err => console.log(err))
        .finally(() => console.log('finally'))
    }, [])
   
    console.log(remeras)
    
  return (
    <ItemDetail remeras={remeras}/>
  )
}

export default ItemDetailContainer