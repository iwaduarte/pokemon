import sC, { keyframes } from "styled-components";
import ashLeft from "../../assets/images/ashLeftLeg.png";
import ashRight from "../../assets/images/ashRightLeg.png";
import ashStop from "../../assets/images/ashStop.png";

const walkAnimation = keyframes`
  0%,100%  {
    background-image: url(${ashStop});
   }
  25% {
    background-image: url(${ashLeft});
  }
  50% {
    background-image: url(${ashStop});
  }
  75% {
    background-image: url(${ashRight});
  }
`;

const HeroWrapper = sC.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  position: relative;
  padding: 20px;
  width:104px;
`;

const Hero = sC.img`
  cursor: pointer;
  &:hover + #tooltip {
    visibility: visible;
    opacity: 1;
    padding-top: 0;

  }
`;

const LoadingTooltip = sC.img`
  position: absolute;
  top: -52px;
  left:20px;
  transition: all 0.5s;
`;

const Tooltip = sC(LoadingTooltip)`
  padding-top: 2vh;
  visibility: hidden;
  opacity: 0;
`;

const WalkingHero = sC.div`
  display: flex;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${walkAnimation} 0.6s infinite;
  height: 64px;
  width: 44px;
`;

export { HeroWrapper, Hero, Tooltip, WalkingHero, LoadingTooltip };
