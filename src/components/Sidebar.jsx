import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
import styles from "./Sidebar.module.css";
import { categories } from "../constants/list";

function Sidebar({query, setQuery}) {

    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLocaleLowerCase();
        
        if (tagName !== 'LI') return;
    
        setQuery((query) => createQueryObject(query, { category }));    
      }
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl/>
        <p>Categuries</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map(item => (
            <li 
                key={item.id} 
                className={
                    item.type.toLocaleLowerCase() == query.category 
                    ? styles.selected 
                    : null
                }
                >{item.type}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Sidebar