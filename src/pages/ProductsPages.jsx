import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPages.module.css";
import { createQueryObject, filterProducts, getInitialQuery, searchProducts } from "../helper/helper";


function ProductsPages() {
  const products = useProducts();
  
  const [displayed, setDisplayed] = useState([]);
  const [search , setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);


    setQuery(getInitialQuery(searchParams));
  },[products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);

    setDisplayed(finalProducts);
  },[query])
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }))
  }

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLocaleLowerCase();
    
    if (tagName !== 'LI') return;

    setQuery((query) => createQueryObject(query, { category }));


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
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's clothing</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProductsPages