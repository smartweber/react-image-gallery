import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Media
} from 'reactstrap';

const PreviewPhotoModal = ({ show, url, handleClose }) => {
  return (
    <Modal isOpen={show} toggle={handleClose}>
      <ModalHeader toggle={handleClose}>Preview</ModalHeader>
      <ModalBody>
        <Media src={url} width="100%" object />
      </ModalBody>
      <ModalFooter>
        <Button outline color="dark" onClick={handleClose}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

PreviewPhotoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default PreviewPhotoModal;
