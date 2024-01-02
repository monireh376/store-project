import { useState } from "react";
import { ImSearch } from "react-icons/im";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPages.module.css";

function ProductsPages() {
  const products = useProducts();
  
  const [search , setSearch] = useState("");

  const searchHandler = () => {
    console.log("search")
  }
  return (
    <>
      <div>
        <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value.toLocaleLowerCase().trim())} />
        <button onClick={searchHandler}><ImSearch /></button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map(product => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>SideBar</div>
      </div>
    </>
  )
}

export default ProductsPages