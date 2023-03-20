import sC from "styled-components";

const Wrapper = sC.div`
  display: flex;
  flex-flow: column;
  margin: 150px 22px;

  & > button {
    margin-top: 60px;
    filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31)) drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));
  }

`;
const Name = sC.h1`
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 36px;
  line-height: 24px;

  & > img {
    cursor: pointer;
    margin-left: 16px;
  }
`;
const MainStatus = sC.div`
  display: flex;
  justify-content: space-evenly;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`;
const TypeStatus = sC.div`
  display: flex;
  align-self: center;
  
  & > div{
    margin: 0 6px;
  }
`;
const StatusBox = sC.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px 0 0;
  gap: 8px;
  border-right: 1px solid black;

  & > div {
    text-align: center;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 24px;
  }

  & > span {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 16px;
  }

  &:last-child {
    border: none;
  }
`;
const Stats = sC.div`
  display: flex;
  flex-flow: column;
`;
const Stat = sC.div`
  flex: 0 1 100%;
  display: flex;
  align-items: center;
  padding-bottom: 12px;

  justify-content: space-between;
  order: ${({ order }) => order};

  & span {
    text-align: left;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
  }
`;
const Box = sC.div`

  display: flex;
  align-items: center;
  gap: 12px;

  & > div {
    font-weight: bold;
    font-size: 1.2rem;
    width: 20px;
  }

  & span {
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 16px;
    color: #2E3A59;
  }

`;
const ActionWrapper = sC.div`
  cursor: pointer;
  height: 0;
  text-align: center;
  position: sticky;
  top: 406px;
  margin-bottom: 8px;
  z-index: 1000;

  & img {
    filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31)) drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));
  }

  @media (max-width: 820px) {
    top: 412px;
  }

`;
const Edit = sC.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  gap: 8px;
  & div {
    margin-bottom: 0;
  }
  & input {
    height: 48px;
    width: 203px;
    padding: 0;
   
  }
`;
const Save = sC.div`
  display:flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid #dde1e8;
  border-radius: 4px;
  
  &:hover {
    transform: scale(1.05);
  }
  
  & img {
    max-height: 12px;
  }
  
  

`;

export {
  Wrapper,
  Name,
  MainStatus,
  StatusBox,
  Stats,
  Stat,
  Box,
  ActionWrapper,
  Save,
  Edit,
  TypeStatus,
};
