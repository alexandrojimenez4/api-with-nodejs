import React from 'react'
import ReactDOM from 'react-dom'
import '../assets/css/components/Cart.css'

const container = document.getElementById('cart')

const Cart = ({ open }) => {
  return (
    ReactDOM.createPortal(
      <div className='shadow'>
        <div className='Cart'>
          <div className='Cart__header'>
            <h1>Your cart list</h1>
          </div>
          <div className='Cart__content'>
            <table className='CartList'>
              <tr>
                <th>Producto</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
              <tr className='CartList__Item'>
                <td>
                  <div className='Card'>
                    <img src='https://blog.soltekonline.com/content/images/size/w2000/2020/12/spacex-falcon-heavy-elon-musk-china-europe-esa-nasa-mars-sls-boeing.jpg' width={50} alt='img' />
                    <h3>
                      Something expensive
                    </h3>
                  </div>
                </td>
                <td>$34.00</td>
                <td>x4</td>
                <td>$566.00</td>
              </tr>
              <tr className='CartList__Item'>
                <td>
                  <div className='Card'>
                    <img src='https://blog.soltekonline.com/content/images/size/w2000/2020/12/spacex-falcon-heavy-elon-musk-china-europe-esa-nasa-mars-sls-boeing.jpg' width={50} alt='img' />
                    <h3>
                      Something expensive
                    </h3>
                  </div>
                </td>
                <td>$34.00</td>
                <td>x4</td>
                <td>$566.00</td>
              </tr>
              <tr className='CartList__Item'>
                <td>
                  <div className='Card'>
                    <img src='https://blog.soltekonline.com/content/images/size/w2000/2020/12/spacex-falcon-heavy-elon-musk-china-europe-esa-nasa-mars-sls-boeing.jpg' width={50} alt='img' />
                    <h3>
                      Something expensive
                    </h3>
                  </div>
                </td>
                <td>$34.00</td>
                <td>x4</td>
                <td>$566.00</td>
              </tr>
              <tr className='CartList__Item'>
                <td>
                  <div className='Card'>
                    <img src='https://blog.soltekonline.com/content/images/size/w2000/2020/12/spacex-falcon-heavy-elon-musk-china-europe-esa-nasa-mars-sls-boeing.jpg' width={50} alt='img' />
                    <h3>
                      Something expensive
                    </h3>
                  </div>
                </td>
                <td>$34.00</td>
                <td>x4</td>
                <td>$566.00</td>
              </tr>
              <tr className='CartList__Item'>
                <td>
                  <div className='Card'>
                    <img src='https://blog.soltekonline.com/content/images/size/w2000/2020/12/spacex-falcon-heavy-elon-musk-china-europe-esa-nasa-mars-sls-boeing.jpg' width={50} alt='img' />
                    <h3>
                      Something expensive
                    </h3>
                  </div>
                </td>
                <td>$34.00</td>
                <td>x4</td>
                <td>$566.00</td>
              </tr>
            </table>
          </div>
          <div className='Cart__footer'>
            <div className='Resume'>
              <table className='Resume__Table'>
                <tr>
                  <th>Subtotal</th>
                  <td>$456.00</td>
                </tr>
                <tr>
                  <th>IVA</th>
                  <td>1.16</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>$456.00</td>
                </tr>
              </table>
            </div>
            <button className='btn btn-primary btn-lg btn-block'>Checkout</button>
            <button className='btn btn-secondary btn-lg btn-block mt-10'>Close</button>
          </div>
        </div>
      </div>,
      container
    )
  )
}

export default Cart
