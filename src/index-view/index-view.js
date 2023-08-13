import "./styles/index-view.css";
import { ThreeColumnGrid } from "./styles/index-view-styling";
import ProductCard from "../shared/components/product-card/product-card";
import productData from "./../assets/shop_data.json";

const IndexView = () => {
  return (
    <ThreeColumnGrid>
      {productData.products.map((product) => {
        return (
          <ProductCard
            image={product.productImage}
            name={product.productName}
            description={product.productDescription}
            price={product.price}
          />
        );
      })}
    </ThreeColumnGrid>
  );
};

export default IndexView;
