import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled.js";

const InputText = ({
  className,
  label,
  type,
  placeholder,
  name,
  onChange,
  onBlur,
  value,
  children,
}) => {
  return (
    <S.InputTextWrapper className={className}>
      {label && <S.Label>{label}</S.Label>}

      <S.Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {children}
    </S.InputTextWrapper>
  );
};

InputText.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
};

export default InputText;
