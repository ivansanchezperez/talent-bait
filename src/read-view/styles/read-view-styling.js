import styled from "styled-components";

export const TwoColumnGrid = styled.div`
  display: block;
  > * {
    margin-top: 5%;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    column-gap: 100px;
  }

  @media (max-width: 1024px) {
    > * {
      margin-top: 15%;
    }
  }
`;

export const AdModalReadView = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: lightgray;
  opacity: 0.5;
  cursor: pointer;
`;

export const AdModalWrapper = styled.div`
  position: relative;
  &:hover ${AdModalReadView} {
    display: block;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }

  .button-container {
    position: absolute;
    z-index: 2;
    display: none;
    > button {
      cursor: pointer;
      padding: 10px 20px;
      border: 1px solid transparent;
      border-radius: 6px;
      color: white;
      width: 20%;
      &#Edit {
        background-color: #0c890c;
      }
      &#Delete {
        background-color: #d93131;
      }
    }
  }

  &:hover .button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    column-gap: 25px;
  }
`;
