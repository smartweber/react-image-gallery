import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import { triggerFavorite, loadPagePhotos } from '../actions';
import PreviewPhotoModal from './PreviewPhotoModal';
import { SpinnerWrapper } from './styles';
import PhotoPagination from './PhotoPagination';
import PhotoItem from './PhotoItem';

const PhotoList = ({
  loading,
  isError,
  totalPhotos,
  errorMessage,
  photoList,
  favoritePhotos,
  dispatch
}) => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState('');
  const [items, setItems] = useState([]);
  const pageSize = 16;

  useEffect(() => {
    dispatch(loadPagePhotos(1, pageSize));
  }, [dispatch]);

  useEffect(() => {
    const pageItems = [...Array(totalPhotos).keys()].map(i => i + 1);
    setItems(pageItems);
  }, [totalPhotos]);

  const handleCloseModal = () => setShow(false);

  const onChangePage = pager => {
    dispatch(loadPagePhotos(pager.currentPage, pager.pageSize));
  };

  const onChangeLikeStatus = photoId => {
    dispatch(triggerFavorite(photoId));
  };

  const onPreview = photoUrl => {
    setUrl(photoUrl);
    setShow(true);
  };

  if (loading) {
    return (
      <SpinnerWrapper>
        <Spinner animation="border" variant="primary" size="xl" />
      </SpinnerWrapper>
    );
  }

  if (isError) {
    return <Alert variant="danger">{errorMessage}</Alert>;
  }

  return (
    <Fragment>
      <PreviewPhotoModal show={show} url={url} handleClose={handleCloseModal} />
      <Container>
        <Row>
          <Col>
            <h3>
              Number of favorite photos: {Object.keys(favoritePhotos).length}
            </h3>
          </Col>
        </Row>

        <Row className="my-3">
          {photoList.map(item => (
            <Col sm={3} key={item.id}>
              <PhotoItem
                data={item}
                likeStatus={
                  favoritePhotos[item.id] ? favoritePhotos[item.id] : false
                }
                onChangeLikeStatus={onChangeLikeStatus}
                onPreview={onPreview}
              />
            </Col>
          ))}
        </Row>

        <Row>
          <Col sm={3}></Col>
          <Col sm={9}>
            <PhotoPagination
              items={items}
              pageSize={pageSize}
              onChangePage={onChangePage}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

PhotoList.propTypes = {
  loading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  totalPhotos: PropTypes.number.isRequired,
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
