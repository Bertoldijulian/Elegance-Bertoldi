import React from 'react'

const Item = ({calls}) => {
  return (
    <>
         
            <div>
                <img src={calls.img}/>
                <div>
                    <h5>{calls.articulo}</h5>
                    <p >{calls.precio}</p>
                    <a href="#">Go somewhere</a>
                </div>
            </div>
    </>
  )
}

export default Item