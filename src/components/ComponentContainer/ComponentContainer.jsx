
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Titulo from "./Titulo"



const ComponentContainer = () => {

  return (
    <>
        <Titulo titulo='SOY VUELA'/>
        <ItemListContainer />
        <ItemDetailContainer/>
    </>
  )
}

export default ComponentContainer