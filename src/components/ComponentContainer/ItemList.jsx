import { useState } from "react"
import { useEffect } from "react"
import { task } from "./Productos"

const ItemList = () => {

    const [calleras, setCalleras] = useState([])
    
    useEffect (() =>{
        task()
        .then(respuesta => setCalleras(respuesta))
        .catch(err => console.log(err))
        .finally(() => console.log('finally'))
    }, [])
    
    console.log(calleras)

    return (
    calleras?.map(calls =>  
                                <div>
                                    <img src={calls.img}/>
                                    <div>
                                        <h5>{calls.articulo}</h5>
                                        <p >{calls.precio}</p>
                                        <a href="#">Go somewhere</a>
                                    </div>
                                </div>)
  )
}

export default ItemList