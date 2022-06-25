import './cartItem.scss';
import { Item } from '../../store/cart-context';

type Props = {
  id: string;
  name: string;
  amount: number;
  price: number;
  key: string;
  onRemove: (id: string) => void;
  onAdd: (item: Item) => void;
};

const CartItem = (props: Props): JSX.Element => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="cart-item" key={props.key}>
      <div>
        <h2>{props.name}</h2>
        <div className="itemSummary">
          <span className="itemPrice">{price}</span>
          <span className="itemAmount">x {props.amount}</span>
        </div>
      </div>
      <div className={'itemActions'}>
        <button onClick={() => props.onRemove}>−</button>
        <button onClick={() => props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
