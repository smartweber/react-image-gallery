import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Image } from 'react-bootstrap';

const PreviewPhotoModal = ({ show, url, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={url} width="100%" rounded />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

PreviewPhotoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default PreviewPhotoModal;
