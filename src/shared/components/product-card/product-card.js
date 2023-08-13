import { useSelector } from "react-redux";
import {
  ProductCardWrapper,
  ProductCardInfoWrapper,
  ProductCardImage,
  ProductCardName,
  ProductCardDescription,
  ProductCardPrice,
} from "./styles/product-card-styling";
import { getAbsolutePath } from "../../infrastructure/routing";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, image, name, description, price }) => {
  const navigate = useNavigate();

  const handleNavigateToReadView = () => {
    const readViewPath = getAbsolutePath("read-view");
    navigate(`${readViewPath}/${id}`);
  };

  return (
    <ProductCardWrapper key={id}>
      <ProductCardImage bgimage={image} />
      <ProductCardInfoWrapper>
        <ProductCardName onClick={handleNavigateToReadView}>
          {name}
        </ProductCardName>
        <ProductCardDescription>{description}</ProductCardDescription>
        <ProductCardPrice>{price}€</ProductCardPrice>
      </ProductCardInfoWrapper>
    </ProductCardWrapper>
  );
};

export default ProductCard;
