import React from 'react'
import './footer.css'

const Footer = () => {
    const date = new Date()
    const today = date.getFullYear();

  return (
    <footer>
        <p>Copyright &copy; {today}</p>
    </footer>
  )
}

export default Footer