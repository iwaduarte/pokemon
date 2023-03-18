import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/addButton.jsx";
import iconPlus from "../../assets/images/plus.png";

import * as S from "./styled.js";

const Sidebar = ({ onClickAdd, pokemonList, onClickView }) => {
  const emptySlots = Array.from({ length: 6 - pokemonList.length });

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {pokemonList.map((pokemon) => {
          const {
            id,
            name,
            sprites: { front_default: image },
          } = pokemon || { sprites: {} };
          return (
            <S.SideBarItem key={id} pokemon onClick={() => onClickView(id)}>
              <img src={image} alt={name} />
            </S.SideBarItem>
          );
        })}
        {emptySlots.map((e, index) => (
          <S.SideBarItem key={index + 1000}>?</S.SideBarItem>
        ))}
      </S.SideBarList>

      <Button icon={iconPlus} onClick={onClickAdd} />
    </S.SideBarWrapper>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
  onClickView: PropTypes.func,
};
