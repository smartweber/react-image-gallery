import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import PhotoThumbnail from './PhotoThumbnail';

function thumbnailFormatter(cell) {
  return <PhotoThumbnail thumbnailUrl={cell} />;
}

const PhotoList = ({ photoList }) => (
  <BootstrapTable
    data={ photoList }
    pagination>
    <TableHeaderColumn dataField='id' isKey width='80'>ID</TableHeaderColumn>
    <TableHeaderColumn dataField='title' tdStyle={ { whiteSpace: 'normal' } }>Name</TableHeaderColumn>
    <TableHeaderColumn dataField='thumbnailUrl' dataFormat={thumbnailFormatter} width='120'>Image</TableHeaderColumn>
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
