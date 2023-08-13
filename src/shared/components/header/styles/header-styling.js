import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #dbe0ff;
  color: black;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 15px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  font-size: 25px;
  height: 90px;
`;

export const Logo = styled.img`
  height: 70px;
  width: 100px;
  margin-left: 25px;
  cursor: pointer;
`;

export const Title = styled.h1`
  margin: 0;
  cursor: pointer;
`;
