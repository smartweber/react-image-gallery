import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

import PhotoList from './components/PhotoItems';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row my-5">
          <Col xs={12}>
            <PhotoList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
