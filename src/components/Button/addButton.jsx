import React from "react";
import PropTypes from "prop-types";

import * as S from "./addButtonStyled.js";

const Button = ({
  text = "",
  icon = "",
  onClick,
  borderColor = "",
  small = false,
  type,
}) => (
  <S.ButtonWrapper
    hasText={!!text}
    className={`${icon ? "icon" : ""}`}
    onClick={onClick}
    borderColor={borderColor}
    small={small}
    type={type}
  >
    {icon ? <S.Icon small={small} src={icon} /> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
);

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  borderColor: PropTypes.string,
  small: PropTypes.bool,
};

export default Button;
