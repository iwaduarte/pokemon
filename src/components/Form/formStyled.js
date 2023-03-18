import sC from "styled-components";
import { ErrorMessage } from "formik";

const Wrapper = sC.div`
  display: flex;
  flex-flow: column; 
  margin-top: 150px;
  margin-left: 22px;
  margin-right: 22px;
  & > button {
    margin-top: 60px;
    filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31)) 
    drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));
  }
`;
const FileInput = sC.input`
display: none;
`;
const ErrorMessageStyled = sC(ErrorMessage)`

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #FF3D71;
  margin-top: 4px;
    
    
`;

export { Wrapper, ErrorMessageStyled, FileInput };
