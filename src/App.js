import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

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
