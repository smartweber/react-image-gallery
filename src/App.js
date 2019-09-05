import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import PhotoListContainer from './containers/PhotoListContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row my-5">
          <Col xs={12}>
            <PhotoListContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
