import React from "react";
import * as S from "./styled.js";
import logo from "../../assets/images/pokemonLogo.png";
import Button from "../../components/Button/addButton.jsx";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <S.HomeWrapper>
      <img src={logo} alt="Pokémon" />
      <Button text="Start" onClick={() => navigate("/map")} />
    </S.HomeWrapper>
  );
};

export default HomePage;
