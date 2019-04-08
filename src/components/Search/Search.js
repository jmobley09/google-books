import React from "react";
import "./Search.css";
import Form from 'react-bootstrap/Form';
import { Col, Button } from "react-bootstrap";

const Search = props => (
  <div className="search-container">
    <Form>
      <Col sm="10">
        <Form.Control plaintext readOnly defaultValue="Book" />
      </Col>
      <Col sm="4">
        <Form.Control type="text" value={props.book} name="book" onChange={props.handleChange} placeholder="Harry Potter" />
      </Col>
      <Col>
        <Button onClick={props.handleFormSubmit} variant="dark">Search</Button>
      </Col>
    </Form>
  </div>
);

export default Search;