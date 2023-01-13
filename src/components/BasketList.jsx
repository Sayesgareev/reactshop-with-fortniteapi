import BasketItem from "./BasketItem";

function BasketList(props) {
  const { order = [], handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype, } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.finalPrice * el.quantity
  }, 0);

  return (
    <div>
      <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>
        {order.length ? (
          order.map((item) => <BasketItem key={item.mainId} {...item} removeFromBasket={removeFromBasket}
          decQuantity={decQuantity}
          incQuantity={incQuantity}/>)
        ) : (
          <li className="collection-item">Корзина пуста</li>
        )}
        <li className="collection-item active">
          Общая стоимость: {totalPrice} руб.

        </li>
        <li className="collection-item active">

          <button className="btn-small">Оформить</button>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          close
        </i>
      </ul>
    </div>
  );
}

export default BasketList;
