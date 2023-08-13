import { useSelector } from "react-redux";
import {
  ProductCardWrapper,
  ProductCardInfoWrapper,
  ProductCardImage,
  ProductCardName,
  ProductCardDescription,
  ProductCardPrice,
} from "./styles/ad-card-styling";

const AdCard = ({ image, name, description, price }) => {
  const productAds = useSelector((state) => state.ads);

  return (
    <ProductCardWrapper>
      <ProductCardImage bgimage={image} />
      <ProductCardInfoWrapper>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardDescription>{description}</ProductCardDescription>
        <ProductCardPrice>{price}€</ProductCardPrice>
      </ProductCardInfoWrapper>
    </ProductCardWrapper>
  );
};

export default AdCard;
