import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import './footer.css'


export default class components extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="xl" className="footer">
          <p>Nome: Guilherme Ceccon</p>
          <p>RA: 1116633</p>
          <p>Email: 1116633@imed.edu.br</p>
        </Container>
      </div>
    );
  }
}