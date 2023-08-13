import {
  ProductCardWrapper,
  ProductCardInfoWrapper,
  ProductCardImage,
  ProductCardName,
  ProductCardDescription,
  ProductCardPrice,
} from "./styles/product-card-styling";

const ProductCard = ({ image, name, description, price }) => {
  return (
    <ProductCardWrapper>
      <ProductCardImage bgImage={image} />
      <ProductCardInfoWrapper>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardDescription>{description}</ProductCardDescription>
        <ProductCardPrice>{price}€</ProductCardPrice>
      </ProductCardInfoWrapper>
    </ProductCardWrapper>
  );
};

export default ProductCard;
