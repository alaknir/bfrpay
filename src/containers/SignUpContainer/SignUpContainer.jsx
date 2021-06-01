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
      <div className="bpay-details-wrapper">
        <div className="d-flex flex-column justify-content-end align-items-end w-75">
          <div className="text-right">
            <img src="/assets/images/logo.PNG" alt="logo" width="80%" />
          </div>
          <br />
          <br />
          <div className="w-75 text-right">
            <i>
              Enter your employment details.
              <br />
              <br />
              Please ensure these details are correct because we'll use this to
              setup your account.
            </i>
          </div>
        </div>
      </div>
      <div className="timeline-wrapper">
        <Accordion
          defaultActiveKey={defaultActiveKey}
          activeKey={defaultActiveKey}
          className={`timeline active-${defaultActiveKey}`}
        >
          <Card>
            <Card.Header>
              <Accordion.Toggle className="toggle" variant="link" disabled>
                <div className={`icon sign-up completed`}>
                  <img src="/assets/images/sign-up.PNG" alt="sign-up" />
                </div>
                <div className="heading">Sign Up</div>
              </Accordion.Toggle>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle className="toggle" variant="link">
                <div className={`icon emp-details completed`}>
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
                <div
                  className={`icon bank-connection ${
                    defaultActiveKey >= 2 ? "completed" : ""
                  }`}
                >
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
                <div
                  className={`icon id-check ${
                    defaultActiveKey >= 3 ? "completed" : ""
                  }`}
                >
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
