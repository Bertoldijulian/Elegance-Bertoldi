
import { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import {task} from "../ItemList/productos"

const ItemListContainer = () => {
    
    const [calleras, setCalleras] = useState([])
    
    useEffect (() =>{
        task()
        .then(respuesta => setCalleras(respuesta))
        .catch(err => console.log(err))
        .finally(() => console.log('finally'))
    }, [])
    
    console.log(calleras)

    const onAgregar = (total) => {
        console.log(`Compro ${total} productos`)
    }

  return (
    <>
        <ItemList calleras={calleras}/>
        <ItemCount inicial={1} stock={7} onAgregar={onAgregar}/>
    </>
  )
}

export default ItemListContainer