import sC from "styled-components";

const Wrapper = sC.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  width: 99px;
  height: 32px;
  background: ${({ color }) => color};
  border-radius: 42px;
`;

export { Wrapper };
