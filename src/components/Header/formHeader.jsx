import React from "react";
import PropTypes from "prop-types";
import { Span, Wrapper } from "./formHeaderStyled.js";

const FormHeader = ({ text }) => (
  <Wrapper>
    <Span>{text}</Span>
  </Wrapper>
);

FormHeader.propTypes = {
  text: PropTypes.string,
};

export default FormHeader;
