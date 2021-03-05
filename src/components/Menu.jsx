import React from 'react'

const Menu = () => {
  return (
    <ul className='nav navbar-nav' id='menu'>
      <li className='active'>
        <a href='index.html'>Home <span className='sr-only'>(current)</span></a>
      </li>
      <li><a href='#'>Mon compte</a></li>
      <li><a href='#homme'>Vélo hommes</a></li>
      <li><a href='#femme'>Vélo femmes</a></li>
      <li><a href='#enfant'>Vélo enfants</a></li>
    </ul>
  )
}

export default Menu
