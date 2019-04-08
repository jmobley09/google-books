import React, { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Results from "./components/Results";

const axios = require('axios');


class App extends Component {

  // Set this.state
  state = {
    book: "",
    results: []
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
    console.log(this.state.book);
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const query = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.book

    axios.get(query)
      .then(result => {
        console.log(result)
        result.data.items.map(item => {
          const title = item.volumeInfo.title + ", " + item.volumeInfo.subtitle
          const stateArr = [];
          stateArr.push(title);
          console.log(stateArr);
          return this.setState({ results: stateArr });
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Google Books</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Search</Nav.Link>
              <Nav.Link href="#link">Saved</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Jumbotron>
          <h1>(REACT) Google Books Search</h1>
          <br></br>
          <h3>Search and Save Books of Interest</h3>
        </Jumbotron>

        <Search
          book={this.state.book}
          handleChange={this.handleChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        <Results>
          {this.state.results}
        </Results>

      </div>
    );
  }
}

export default App;
