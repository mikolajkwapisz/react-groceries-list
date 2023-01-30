import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"




const ItemList = () => {

  const [items, setItems] = useState([
    {
        id: 1,
        checked: false,
        name: "Cola"
    },
    {
        id: 2,
        checked: false,
        name: "Pespi"
    },
    {
        id: 3,
        checked: false,
        name: "Eggs"
    },
    {
        id: 4,
        checked: false,
        name: "Milk"
    }
])

const handleCheck = (id) => {
    const listItems = items.map( (item) => {
        if ( item.id === id) {
            return {...item, checked: !item.checked}
        } else {
            return {...item}
        }
    })
    // const markedProducts = listItems.map( item => {
    //     if(item.checked == true) {
    //         return item.name
    //     } else if( item.checked != true) {
    //         return undefined
    //     }
    // })
    setItems( listItems )
    localStorage.setItem('shoppingList', JSON.stringify(listItems))
}

const handleDelete = (id) => {
    const listItems = items.filter( (item) => item.id !== id)
    setItems( listItems )
    localStorage.setItem('shoppingList', JSON.stringify(listItems))
}

return(
    <>
        { items.length ? (
            <ul>
                { items.map( (item) => (
                    <li className="item" key={item.id}>
                        <input 
                            type="checkbox"
                            onChange={ () => handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label
                            onDoubleClick={ () => handleCheck(item.id)}
                        > {item.name}</label>
                        <FaTrashAlt 
                            onClick={ () => handleDelete(item.id)}
                            role="button"
                            tabIndex="0"
                        />
                    </li>
                ))}
            </ul>
        ) : (
            <h1>Your list is empty</h1>
        )}
    </>
        
)
};

export default ItemList;
