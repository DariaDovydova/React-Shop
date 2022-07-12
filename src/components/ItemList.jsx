import { Item } from './Item';

function ItemList({items = [], addToBasket = Function.prototype}) {
  if (!items.length) {
    return <h3>Nothing here</h3>
  }
  return (
    <div className='items'>
      {items.map(item => (
        <Item key={item.id} {...item} addToBasket={addToBasket} />
      ))}

    </div>
  )
}

export { ItemList };