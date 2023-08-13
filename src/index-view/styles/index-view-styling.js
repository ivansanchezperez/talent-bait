import styled from "styled-components";

export const ThreeColumnGrid = styled.div`
  display: block;
  gap: 5%;
  @media (min-width: 768px) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
