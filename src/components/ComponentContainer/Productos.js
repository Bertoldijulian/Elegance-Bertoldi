let calleras =
[
    {
        id: 1,
        articulo: "callera",
        precio: 2200,
        img: "../../Multimedia/img/calleras1.jpg"
    },
    
    {
        id: 2,
        articulo: "callera",
        precio: 2200,
        img: "../../Multimedia/img/calleras2.jpg"
    },
    
    {
        id: 3,
        articulo: "callera",
        precio: 2200,
        img: "../../Multimedia/img/calleras3.jpg"
    },
    
    {
        id: 4,
        articulo: "callera",
        precio: 2200,
        img: "../../Multimedia/img/calleras4.jpg"
    },
    
    {
        id: 5,
        articulo: "callera",
        precio: 2700,
        img: "../../Multimedia/img/calleras5.jpg"
    },
    
    {
        id: 6,
        articulo: "callera",
        precio: 2700,
        img: "../../Multimedia/img/calleras6.jpg"
    }
]

export const task = () => {
    return new Promise ((resolve, rejected) => {
        setTimeout (() => {
            resolve(calleras)
        } ,2000)
    })
}