import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartContext"

function CheckoutPage() {
  const [state, dispatch] = useCart();
  console.log(state)

  const clickHandler = (type, payload) => dispatch({type, payload});
  return (
    <div>
      <div>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  )
}

export default CheckoutPage