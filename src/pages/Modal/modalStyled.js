import sC from "styled-components";
import cameraIcon from "../../assets/images/camera.png";

const Wrapper = sC.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  width: 360px;
  height: 559px;
  left: calc(50% - 360px / 2);
  top: calc(50% - 559px / 2 - 0.5px);
  background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);
  border-radius: 8px;
  box-shadow: 0 0 1px rgba(9, 30, 66, 0.31), 0 4px 8px rgba(9, 30, 66, 0.25);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 820px) {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  }


  
`;

const Photo = sC.div`
  
  display: flex;
  align-self: center;
  align-items: ${({ image }) => (image ? "stretch" : "center")};
  justify-content: center;
  box-sizing: border-box;
  position: absolute;
  border: 4px solid #00D68F;
  border-radius: 1000px;
  width: 69%;
  height: 44%;
  margin-top: 32px;
  background: #F7F9FC;
  
  & > img {
    margin-top: 12px;
    max-height: 200px;
    max-width: 140px;
  }

  @media (max-width: 820px) {
    border-radius: 50%;
    height: 38%;
  }
`;

const Camera = sC.div`
   position: relative;
  cursor: pointer;
   background:url(${cameraIcon}) no-repeat center ;
   width: 82px;
   height: 74px;
  .icon {
    position: absolute;
    right: -10%;
    bottom: -10%; 
  }`;

const Header = sC.div`
  display: flex;
  margin: 12px;
  align-self: flex-end;
`;

const Main = sC.div`
  background-color: #F7F9FC;
  margin-top: 88px;
  padding-bottom: 40px;
  border-radius: 24px 24px 0 0;
`;

export { Wrapper, Photo, Camera, Main, Header };
