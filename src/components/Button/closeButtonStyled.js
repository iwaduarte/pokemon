import sC from "styled-components";

const Wrapper = sC.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: #F7F9FC;
  border: 2px solid #8F9BB3;
  border-radius: 1000px;
`;
const Close = sC.img`
  &:hover{
    transform: scale(1.04);
  }
`;

export { Wrapper, Close };
