import styled from "styled-components";

export const ButtonWrapper = styled.button`
  padding: 1.6rem 2.4rem;
  background-color: #ff3d71;
  border: 1px solid #ff3d71;
  border-radius: 42px;
  font-weight: bold;

  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;

  font-size: ${({ hasText }) => (hasText ? "inherit" : "1.6rem")};
  line-height: ${({ hasText }) => (hasText ? 1.333 : 1.6)};
  height: ${({ hasText }) => (hasText ? " 56px" : "auto")};
  min-width: ${({ hasText }) => (hasText ? "124px;" : "auto")};

  &.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ small }) => (small ? "32px" : "64px")};
    height: ${({ small }) => (small ? "32px" : "64px")};
    padding: ${({ small }) => (small ? 0 : "auto")};
    border: ${({ borderColor, small }) =>
      `${small ? "2px" : "4px"} solid ${borderColor || "#db2c66"}`};
  }
  &:hover {
    background-color: #db2c66;
  }
`;

export const Icon = styled.img`
  width: ${({ small }) => (small ? "12.5px" : "auto")};
`;

export const Text = styled.span``;
