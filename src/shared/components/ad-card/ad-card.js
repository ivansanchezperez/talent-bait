import { useSelector } from "react-redux";
import {
  ProductCardWrapper,
  ProductCardInfoWrapper,
  ProductCardImage,
  ProductCardName,
  ProductCardDescription,
  ProductCardPrice,
} from "./styles/ad-card-styling";

const AdCard = () => {
  return (
    <div>Add card</div>
    // <ProductCardWrapper>
    //   <ProductCardImage bgimage={image} />
    //   <ProductCardInfoWrapper>
    //     <ProductCardName>{name}</ProductCardName>
    //     <ProductCardDescription>{description}</ProductCardDescription>
    //     <ProductCardPrice>{price}€</ProductCardPrice>
    //   </ProductCardInfoWrapper>
    // </ProductCardWrapper>
  );
};

export default AdCard;
