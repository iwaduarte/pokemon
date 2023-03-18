import React, { useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const DropdownPage = ({ options, onChange, maxLimit = 2 }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectedOptions = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    onChange(selectedOptions.map((option) => option.value));
  };

  return (
    <Select
      isMulti
      options={options}
      value={selectedOptions}
      onChange={handleSelectedOptions}
      isOptionDisabled={() => selectedOptions.length >= maxLimit}
    />
  );
};

DropdownPage.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DropdownPage;
