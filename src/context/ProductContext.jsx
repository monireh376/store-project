import { useEffect, useState } from "react";
import { createContext } from "vm"
import api from "../services/config";

const ProductContext = createContext();

function ProductProvider({children}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setProducts(await api.get("/products"));                
            } catch (error) {
                console.log(error.message)
            }

        }

        fetchProducts();
    },[]);
  return (
    <ProductContext.Provider value={products} >
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider