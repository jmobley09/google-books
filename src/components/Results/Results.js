import React from "react";
import "./Results.css";
import { Col, Row } from "react-bootstrap";

const Search = props => (
  <div className="results-container">
    <Row>
      <Col>
        {props.children}
      </Col>
    </Row>
  </div>
);

export default Search;