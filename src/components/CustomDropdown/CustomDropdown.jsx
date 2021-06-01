/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from "react";
import { find, isEmpty } from "lodash";

import { useDidClickedOutside } from "../../hooks";

const CustomDropdown = (props) => {
  const popupDomRef = useRef(null);
  const { placeholder, options, value, onChange, OptionTemplate } = props;
  const clickedOutside = useDidClickedOutside(popupDomRef);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [selectLabel, setSelectedLabel] = useState(null);

  useEffect(() => {
    const labelDetails = find(options, { value: selectedValue });

    if (!isEmpty(labelDetails)) {
      setSelectedLabel(<OptionTemplate {...labelDetails} />);
    } else {
      setSelectedLabel(null);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  useEffect(() => {
    if (clickedOutside) {
      setIsDropdownOpen(false);
    }
  }, [clickedOutside]);

  const onOptionSelect = ({ value }) => {
    setSelectedValue(value);
    setIsDropdownOpen(false);
    onChange(value);
  };

  return (
    <div className="custom-dropdown">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="trigger"
      >
        {(isDropdownOpen || !selectLabel) && (
          <div className="place-holder">{placeholder}</div>
        )}
        {!isDropdownOpen && selectLabel && (
          <div className="label">{selectLabel}</div>
        )}
      </button>
      {isDropdownOpen && (
        <div className="options" ref={popupDomRef}>
          {options.map((item) => {
            return (
              <a
                href="javascript:void(0)"
                className="option-item"
                onClick={() => onOptionSelect(item)}
              >
                <OptionTemplate {...item} />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

CustomDropdown.defaultProps = {
  options: [],
  value: "",
  placeholder: "Select",
  OptionTemplate: ({ label }) => {
    return <div>{label}</div>;
  },
};

export default CustomDropdown;
