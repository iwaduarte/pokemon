import React from "react";

import {
  HeroWrapper,
  Hero as Ash,
  Tooltip,
  WalkingHero as WalkingAsh,
  LoadingTooltip,
} from "./heroStyled.js";
import heroImg from "../../assets/images/ashFront.png";
import searchTooltip from "../../assets/images/searchTooltip.png";
import searchingToolTip from "../../assets/images/searchingTooltip.png";
import errorTooltip from "../../assets/images/tooltipError.png";

import PropTypes from "prop-types";

const Hero = ({ onClick, isFetching, isHeroLocked }) => {
  return (
    <HeroWrapper>
      {isFetching ? (
        <>
          <WalkingAsh onClick={() => onClick(false)} />
          <LoadingTooltip src={searchingToolTip} />
        </>
      ) : (
        <>
          <Ash src={heroImg} alt="" onClick={() => onClick(true)} />
          <Tooltip
            id="tooltip"
            src={isHeroLocked ? errorTooltip : searchTooltip}
          />
        </>
      )}
    </HeroWrapper>
  );
};

Hero.propTypes = {
  onClick: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Hero;
