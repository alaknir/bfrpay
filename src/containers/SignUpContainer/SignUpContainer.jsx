import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";

import EmploymentDetails from "./EmploymentDetails";
import BankConnectionDetails from "./BankConnectionDetails";

const SignUpContainer = () => {
  const [defaultActiveKey, setDefaultActiveKey] = useState("1");
  const onNextClick = () => {
    setDefaultActiveKey("2");
  };

  return (
    <div className="d-flex w-100 h-100 signup-container">
      <div className="bpay-details-wrapper">Before pay details</div>
      <div className="timeline-wrapper">
        <Accordion
          defaultActiveKey={defaultActiveKey}
          activeKey={defaultActiveKey}
          className="timeline"
        >
          <Card>
            <Card.Header>
              <Accordion.Toggle className="toggle" variant="link" disabled>
                <div className="icon sign-up">
                  <img src="/assets/images/sign-up.PNG" alt="sign-up" />
                </div>
                <div className="heading">Sign Up</div>
              </Accordion.Toggle>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle className="toggle" variant="link">
                <div className="icon emp-details">
                  <img src="/assets/images/emp-status.PNG" alt="emp-status" />
                </div>
                <div className="heading">Employment Details</div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <EmploymentDetails onNextClick={onNextClick} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle className="toggle" variant="link">
                <div className="icon bank-connection">
                  <img src="/assets/images/bank-connection.PNG" alt="sign-up" />
                </div>
                <div className="heading">Bank Connection</div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <BankConnectionDetails />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle className="toggle" variant="link">
                <div className="icon id-check">
                  <img src="/assets/images/id-check.PNG" alt="sign-up" />
                </div>
                <div className="heading">ID Check</div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body> ID Check</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default SignUpContainer;
