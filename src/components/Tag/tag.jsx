import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./tagStyled.js";
import { colors, localization } from "../../localization.js";

const Tag = ({ type }) => (
  <Wrapper color={colors[type]}>{localization[type]}</Wrapper>
);

Tag.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Tag;
