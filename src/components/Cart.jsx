function Cart({quantity = 0, handleBasketShow = Function.prototype}) {
  return (
    <div className="cart  grey darken-4 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  )
}

export { Cart };