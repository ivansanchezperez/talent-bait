import { useNavigate, useParams } from "react-router-dom";
import "./styles/read-view.css";
import { useEffect } from "react";
import { getAbsolutePath } from "../shared/infrastructure/routing";

const ReadView = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.length === 0) navigate(getAbsolutePath("index-view"));
  }, []);

  return (
    <div>Is read view {params.productId}</div>
    // <ThreeColumnGrid>
    //   {productData.products.map((product) => {
    //     return (
    //       <ProductCard
    //         image={product.productImage}
    //         name={product.productName}
    //         description={product.productDescription}
    //         price={product.price}
    //       />
    //     );
    //   })}
    // </ThreeColumnGrid>
  );
};

export default ReadView;
