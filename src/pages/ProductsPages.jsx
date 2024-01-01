import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPages.module.css";

function ProductsPages() {
  const products = useProducts();
  
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map(product => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <div>SideBar</div>
    </div>
  )
}

export default ProductsPages