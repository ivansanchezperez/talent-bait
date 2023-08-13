import React from "react";
import data from "./../../../assets/shop_data.json";
import { HeaderContainer, Logo, Title } from "./styles/header-styling";
import { useNavigate } from "react-router-dom";
import { getAbsolutePath } from "../../infrastructure/routing";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo
        src={data.logo}
        alt="Logo"
        onClick={() => navigate(getAbsolutePath("index-view"))}
      />
      <Title onClick={() => navigate(getAbsolutePath("index-view"))}>
        {data.name}
      </Title>
    </HeaderContainer>
  );
};

export default Header;
