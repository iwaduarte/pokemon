import React from "react";
import PropTypes from "prop-types";

import chevron from "../../assets/images/chevronDownBlack.png";

import * as S from "./styled.js";

const InputNumber = ({
  className,
  label,
  placeholder,
  name,
  suffix,
  icon,
  onChange,
  setValue = () => {},
  onBlur,
  value,
  children,
}) => {
  return (
    <S.InputNumberWrapper className={className}>
      {label && (
        <S.Label>
          {icon && <S.Icon src={icon} />} {label}
        </S.Label>
      )}
      <S.InputContent>
        <S.Input
          name={name}
          type="number"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />

        {suffix && <S.InputSuffix>{suffix}</S.InputSuffix>}

        <S.InputActions>
          <S.Arrow
            src={chevron}
            className="increase"
            onClick={() => setValue(name, Number(value) + 1)}
            alt="Mais"
          />
          <S.Arrow
            src={chevron}
            className="decrease"
            onClick={() => setValue(name, Number(value) - 1)}
            alt="Menos"
          />
        </S.InputActions>
      </S.InputContent>
      {children}
    </S.InputNumberWrapper>
  );
};

InputNumber.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  suffix: PropTypes.string,
  icon: PropTypes.string,
};

export default InputNumber;
