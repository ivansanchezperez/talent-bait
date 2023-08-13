import styled from "styled-components";

export const TwoColumnGrid = styled.div`
  display: block;
  > * {
    margin-top: 15%;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    column-gap: 100px;
  }
`;
