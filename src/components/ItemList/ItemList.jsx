import Item from "../Item/Item"

const ItemList = ({calleras}) => {
    
    return (  
        
        <>
        {
            calleras?.map(calls => <Item key={calls.id} calls={calls}/>)
        }
        </>

  )
}

export default ItemList