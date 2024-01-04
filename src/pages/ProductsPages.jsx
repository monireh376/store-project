import { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPages.module.css";

function ProductsPages() {
  const products = useProducts();
  
  const [displayed, setDisplayed] = useState([]);
  const [search , setSearch] = useState("");
  const [query, setQuery] = useState({});

  useEffect(() => {
    setDisplayed(products);
  },[products]);

  useEffect(() => {
    console.log(query)
  },[query])
  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }))
  }

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const categury = event.target.innerText.toLocaleLowerCase();
    
    if (tagName !== 'LI') return;

    setQuery((query) => ({ ...query, categury}));


  }
  return (
    <>
      <div>
        <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value.toLocaleLowerCase().trim())} />
        <button onClick={searchHandler}><ImSearch /></button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map(product => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl/>
            <p>Categuries</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>all</li>
            <li>Electrinics</li>
            <li>Jewelry</li>
            <li>Men's Clothing</li>
            <li>Wemon's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProductsPages