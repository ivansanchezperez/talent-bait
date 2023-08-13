import styled from "styled-components";

export const AdSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AdHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  padding: 12px 16px 0 12px;
`;

export const AdLogo = styled.div`
  display: flex;
  margin-right: 7px;
  > figure {
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 40px;
    margin: 0;
    overflow: hidden;
    width: 40px;

    > div {
      width: 100%;
      height: 100%;

      > img {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }
  }
`;

export const AdHeaderDescription = styled.div`
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  > :nth-child(1) {
    font-size: 14px;
  }
  > :nth-child(2) {
    font-size: 13px;
    color: #65676b;
  }
`;

export const AdHeadLine = styled.input`
  display: flex;
  align-items: flex-start;
  border: none;
  font-size: 17px;
  background-color: transparent;
`;

export const AdImage = styled.div`
  display: flex;
  align-items: flex-start;

  > figure {
    cursor: pointer;
    margin: 0;
    overflow: hidden;

    > div {
      width: 100%;
      height: 100%;

      > img {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }
  }
`;

export const AdEditButton = styled.div`
  position: absolute;
  top: 5px;
  right: 15px;
  background-color: lightgray;
  border: 1px solid lightgray;
  border-radius: 6px;
  padding: 6px;
  display: none;
`;

export const AdDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #f0f2f5;
  > :nth-child(1) {
    width: 100%;
    padding: 12px 16px;
  }
  > :nth-child(2) {
    width: 30%;
    padding: 12px 16px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
  }
`;

export const AdDescriptionTitle = styled.input`
  border: none;
  font-size: 17px;
  background-color: transparent;
  font-weight: bold;
`;

export const AdDescriptionText = styled.input`
  border: none;
  font-size: 15px;
  background-color: transparent;
`;

export const AdCTA = styled.button`
  padding: 0 12px;
  font-size: 15px;
  align-items: center;
  background-color: #e4e6eb;
  border: 0;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  flex-wrap: nowrap;
  font-size: 15px;
  font-weight: 600;
  height: 36px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 19px;
  overflow-wrap: break-word;
  padding: 0 12px;
  position: relative;
  text-align: start;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  > input {
    padding: 0 12px;
    font-size: 15px;
    background-color: #e4e6eb;
    border: 0;
    border-radius: 6px;
    flex-shrink: 0;
    font-weight: bold;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
`;

export const AdSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #616770;
  flex-direction: row;
  flex-grow: 1;
  font-size: 13px;
  order: 1;
  padding: 15px 14px;
  font-weight: bold;
`;

export const AdWrapper = styled.div`
  background: white;
  color: #1c1e21;
  display: flex;
  align-items: center;
  line-height: 1.34;
  width: 500px;
  margin-right: auto;
  margin-left: auto;
  &:hover ${AdDescriptionText} {
    border: 1px dotted black;
  }
  &:hover ${AdDescriptionTitle} {
    border: 1px dotted black;
  }
  &:hover ${AdHeadLine} {
    border: 1px dotted black;
  }
  &:hover ${AdCTA} {
    border: 1px dotted black;
  }
  &:hover ${AdEditButton} {
    display: block;
  }
`;
