import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";

function Sidebar({setQuery}) {

    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLocaleLowerCase();
        
        if (tagName !== 'LI') return;
    
        setQuery((query) => createQueryObject(query, { category }));
    
    
      }
  return (
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
  )
}

export default Sidebar