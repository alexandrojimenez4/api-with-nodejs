import React from 'react'
import Menu from './Menu'
import Search from './Search'
import ShoppingCartList from './ShoppingCartList'

const Header = () => {
  return (
    <nav className='navbar'>
      <div className='container-fluid amarillo'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
            aria-expanded='false'
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className='navbar-brand' href='index.html"'>
            <img alt='Brand' src='../assets/img/logo2.png' />
          </a>
        </div>

        <div className='collapse navbar-collapse'>
          <Menu />
          <Search />
          <ul className=''>
            <ShoppingCartList />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
