import styled from "styled-components";

export const SideBarWrapper = styled.aside`
  background-color: transparent;
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
`;

export const SideBarList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: inherit;
`;

export const SideBarItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 6.4rem;
  border: 4px solid ${({ pokemon }) => (pokemon ? "#00D68F" : "#004a45")};
  border-radius: 12.8rem;
  font-size: 4rem;
  font-weight: bold;
  color: #004a45;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${({ pokemon }) => (pokemon ? "#F7F9FC" : "#00d68f")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  & > img {
    max-height: 62px;
    max-width: 66px;
  }

  &:hover {
    background-color: ${({ pokemon }) => (!pokemon ? "#004a45" : "#00d68f")};
    color: #00d68f;
  }

  &:not(last-of-type) {
    margin-bottom: 1.6rem;
  }
`;
