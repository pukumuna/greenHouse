import '../styles/Cart.css'
import { useState } from 'react'

const Cart = () => {
  const monsteraPrice = 8
  const [cart, updateCart] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className='lmj-cart'>
      <button onClick={() => setIsOpen(false)}>Fermer</button>  &nbsp; &nbsp;
       <button onClick={() => updateCart(cart - cart)}>Vider le Panier</button>
      <h2>Panier</h2>
      <div>
        Monstera : {monsteraPrice}€  &nbsp;&nbsp;
        
      </div>
      <h3>Total : {monsteraPrice * cart}€</h3>
    </div>
  ) : (
    <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
  )
}
export default Cart

