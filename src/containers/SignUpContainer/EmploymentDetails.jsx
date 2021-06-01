import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CustomDropdown } from "../../components";

const EmploymentDetails = ({ onNextClick }) => {
  const [empType, setEmpType] = useState("");

  const onEmploymentTypeChange = (val) => {
    setEmpType(val);
  };

  return (
    <div>
      <CustomDropdown
        placeholder="Employment Status"
        options={[
          {
            value: 1,
            employmentType: "Full Time",
            employmentTypeDesc: "You work more than 38 hours per week",
          },
          {
            value: 2,
            employmentType: "Part Time",
            employmentTypeDesc: "You work less than 38 hours per week",
          },
        ]}
        onChange={onEmploymentTypeChange}
        OptionTemplate={({ employmentType, employmentTypeDesc }) => {
          return (
            <div className="employment-type-drp-template">
              <div className="title">{employmentType}</div>
              <div className="desctiption">{employmentTypeDesc}</div>
            </div>
          );
        }}
      />
      <br />
      {empType && (
        <Button variant="outline-primary" onClick={onNextClick}>
          Next
        </Button>
      )}
    </div>
  );
};

export default EmploymentDetails;
