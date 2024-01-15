import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSideBar";
import { useCart } from "../context/CartContext"

import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();
  console.log(state)

  const clickHandler = (type, payload) => dispatch({type, payload});

  if (!state.itemsCounter) {
    return (<div className={styles.container}>Empty</div>)
  }
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  )
}

export default CheckoutPage