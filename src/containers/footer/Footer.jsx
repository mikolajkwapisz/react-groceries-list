import React from 'react'
import './footer.css'

const Footer = ( { length }) => {

  return (
    <footer>
          {length === 1 ? (
            <p>List items: {length}</p>
            ) : (
              <p>List items: {length}</p>
          )} 
    </footer>
  )
}

export default Footer