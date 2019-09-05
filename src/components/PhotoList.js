import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { triggerFavorite } from '../actions';
import PhotoThumbnail from './PhotoThumbnail';
import PreviewPhotoModal from './PreviewPhotoModal';

function thumbnailFormatter(cell) {
  return <PhotoThumbnail thumbnailUrl={cell} />;
}

const PhotoList = ({ photoList, favoritePhotos, dispatch }) => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState('');

  const handleCloseModal = () => setShow(false);
  const handleShowModal = url => () => {
    setUrl(url);
    setShow(true);
  };

  const favoriteActionFormatter = (_, row) => {
    return (
      <ButtonToolbar>
        <Button
          className="mr-3"
          variant={
            favoritePhotos[row.id] ? 'outline-warning' : 'outline-success'
          }
          onClick={() => dispatch(triggerFavorite(row.id))}
        >
          {favoritePhotos[row.id] ? 'Unlike' : 'Like'}
        </Button>

        <Button variant="outline-primary" onClick={handleShowModal(row.url)}>
          Preview
        </Button>
      </ButtonToolbar>
    );
  };

  const options = {
    sizePerPageList: [
      {
        text: '5',
        value: 5
      },
      {
        text: '10',
        value: 10
      },
      {
        text: '20',
        value: 20
      },
      {
        text: '50',
        value: 50
      },
      {
        text: 'All',
        value: photoList.length
      }
    ],
    sizePerPage: 5
  };

  return (
    <Fragment>
      <h3 className="mb-3">
        Number of favorite photos: {Object.keys(favoritePhotos).length}
      </h3>
      <BootstrapTable data={photoList} pagination options={options}>
        <TableHeaderColumn dataField="id" isKey width="80">
          ID
        </TableHeaderColumn>
        <TableHeaderColumn dataField="title" tdStyle={{ whiteSpace: 'normal' }}>
          Name
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="thumbnailUrl"
          dataFormat={thumbnailFormatter}
          width="150"
        >
          Image
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField="button"
          dataFormat={favoriteActionFormatter}
        />
      </BootstrapTable>
      <PreviewPhotoModal show={show} url={url} handleClose={handleCloseModal} />
    </Fragment>
  );
};

PhotoList.propTypes = {
  photoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      albumId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  favoritePhotos: PropTypes.object.isRequired
};

export default PhotoList;
