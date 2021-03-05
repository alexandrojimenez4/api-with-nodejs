import React from 'react'

const ShoppingCartList = () => {
  return (
    <li className="dropdown">
      <a 
        href="#"
        className="dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false">
        Mon panier
        <span className="badge" id="badgePanier" >0</span>
        <span className='caret'></span>
      </a>
      <ul className="dropdown-menu">
        <li>
            <div className='row'>
                <div className='col-md-12'>
                    <table className='listPanier' id='listInfo'>

                    </table>
                </div>
            </div>
        </li>
        <li role="separator" className="divider"></li>
        <li>
          <div className='row'>
            <div className='col-md-10 col-md-offset-1 text-center'>
              <a href="panier.html" className='btn btn-warning cuadrado btn-primary btn-lg btn-block"'>Affichier mon panier</a>
            </div>
          </div>
        </li>
      </ul>
    </li>
  )
}

export default ShoppingCartList
