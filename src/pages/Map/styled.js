import styled from "styled-components";

import img from "../../assets/images/pageBackground.png";

const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  height: 100vh;
  width: 160vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 820px) {
    background-size: cover;
    background-position: top;
    width: auto;
  }
`;

export { MapWrapper };
