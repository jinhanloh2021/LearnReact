import './cartItem.scss';
import { Item } from '../../store/cart-context';

type Props = {
  item: Item;
  onAdd: (item: Item) => void;
  onRemove: (id: string, amount: number) => void;
};

const CartItem = (props: Props) => {
  const price = `$${props.item.price.toFixed(2)}`;

  return (
    <li className={'cart-item'}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={'cart-item-summary'}>
          <span className={'cart-item-price'}>{price}</span>
          <span className={'cart-item-amount'}>x {props.item.amount}</span>
        </div>
      </div>
      <div className={'cart-item-actions'}>
        <button onClick={() => props.onRemove(props.item.id, 1)}>−</button>
        <button onClick={() => props.onAdd(props.item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
