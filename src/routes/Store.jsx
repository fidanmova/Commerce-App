import { useContext } from "react";
import "./store.styles.scss"
import { ProductsContext } from "../context/products.context";
import ProductCard from "../components/productCard/ProductCard";


const Store = () => {
  const {products}=useContext(ProductsContext)
  return (
    <div className="products-container" >
      {products.map(( product ) => (
        // <div key={id}>
        //   <h1>{name}</h1>
        // </div>
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Store;
