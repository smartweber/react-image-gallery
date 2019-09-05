import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button, ButtonToolbar } from 'react-bootstrap';
import PhotoThumbnail from './PhotoThumbnail';
import PreviewPhotoModal from './PreviewPhotoModal';
import { triggerFavorite } from '../actions';

function thumbnailFormatter(cell) {
  return <PhotoThumbnail thumbnailUrl={cell} />;
}

const PhotoList = ({ photoList, favoritePhotos, dispatch }) => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (url) => () => {
    setUrl(url);
    setShow(true);
  };

  const favoriteActionFormatter = (_, row) => {
    return (
      <ButtonToolbar>
        <Button
          className='mr-3'
          variant={favoritePhotos[row.id] ? 'outline-warning' : 'outline-success'}
          onClick={() => 
            dispatch(triggerFavorite(row.id))}
        >
        { favoritePhotos[row.id] ? 'Unlike' : 'Like' }
        </Button>

        <Button
          variant="outline-primary"
          onClick={handleShow(row.url)}
        >
          Preview
        </Button>
      </ButtonToolbar>
   );
  };

  return <Fragment>
    <h3 className='mb-3'>Number of favorite photos: {Object.keys(favoritePhotos).length}</h3>
    <BootstrapTable
      data={ photoList }
      pagination>
      <TableHeaderColumn dataField='id' isKey width='80'>ID</TableHeaderColumn>
      <TableHeaderColumn dataField='title' tdStyle={ { whiteSpace: 'normal' } }>Name</TableHeaderColumn>
      <TableHeaderColumn dataField='thumbnailUrl' dataFormat={thumbnailFormatter} width='150'>Image</TableHeaderColumn>
      <TableHeaderColumn
        dataField='button'
        dataFormat={favoriteActionFormatter}
      />
    </BootstrapTable>
    <PreviewPhotoModal show={show} url={url} handleClose={handleClose} />
  </Fragment>
}

PhotoList.propTypes = {
  photoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      albumId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  favoritePhotos: PropTypes.object.isRequired
};

export default PhotoList;
