function BasketItem({id, name, price, quantity, 
  removeFromBasket= Function.prototype,
  incQuantity = Function.prototype,
  decQuantity = Function.prototype,
}) {
  return (
    <li className="collection-item">
      {name} 
      <i class="material-icons black-text basket-quantity" onClick={() => decQuantity(id)}>remove</i>
      x{quantity} 
      <i class="material-icons black-text basket-quantity" onClick={() => incQuantity(id)}>add</i> = {price * quantity} руб.
      <span class="secondary-content" onClick={() => removeFromBasket(id)}>
        <i class="material-icons black-text basket-delete">close</i>
        </span>
    </li>
  )
}

export { BasketItem };