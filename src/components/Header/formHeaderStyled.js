import sC from "styled-components";

const Wrapper = sC.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin: 32px 0;
  border: 1px solid #C5CEE0;;

  
`;

const Span = sC.span`
  position: absolute;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 24px;
  text-align:center;
  top: -20px;
  padding: 10px;
  background-color: rgb(247, 249, 252) ;
  text-transform: uppercase;
  color: #2E3A59; 
`;
export { Wrapper, Span };
