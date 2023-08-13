import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  width: 350px;
  height: 500px;
  background: white;
  border: solid 1px transparent;
  border-radius: 8px;
  color: #1e1f46;
`;

export const ProductCardImage = styled.div.attrs((props) => props)`
  width: 100%;
  height: 40%;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  border-radius: 8px;
`;

export const ProductCardName = styled.div`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const ProductCardDescription = styled.div`
  font-size: 15px;
  color: #999696;
`;

export const ProductCardPrice = styled.div`
  font-size: 18px;
`;

export const ProductCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
`;
