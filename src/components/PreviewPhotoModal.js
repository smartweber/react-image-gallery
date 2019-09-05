import React, {Component} from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

class PreviewPhotoModal extends Component {
  render() {
    const { show, url, handleClose } = this.props;

    return (
			<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={url} width='100%' rounded />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PreviewPhotoModal;

