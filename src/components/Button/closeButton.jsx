import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Close } from "./closeButtonStyled.js";
import iconClose from "../../assets/images/close.png";

const CloseButton = ({
  src = iconClose,
  alt = "Fechar",
  onClick = () => {},
}) => (
  <Wrapper onClick={onClick}>
    <Close src={src} alt={alt} />
  </Wrapper>
);

CloseButton.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

export default CloseButton;
