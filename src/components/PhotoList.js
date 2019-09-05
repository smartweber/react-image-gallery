import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const PhotoList = ({ photoList }) => (
  <BootstrapTable
    data={ photoList }
    pagination>
    <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
    <TableHeaderColumn dataField='title'>Product Name</TableHeaderColumn>
    <TableHeaderColumn dataField='thumbnailUrl'>Product Price</TableHeaderColumn>
  </BootstrapTable>
);

PhotoList.propTypes = {
  photoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      albumId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};

export default PhotoList;
