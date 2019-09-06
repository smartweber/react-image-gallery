import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner, Alert, Container, Row, Col } from 'reactstrap';
import { triggerFavorite, loadPagePhotos } from '../../actions';
import PreviewPhotoModal from '../PreviewPhotoModal';
import PhotoPagination from '../PhotoPagination';
import PhotoItem from '../PhotoItem';
import { SpinnerWrapper } from './styles';

const PhotoItems = ({
  loading,
  isError,
  totalCount,
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
    const pageItems = [...Array(totalCount).keys()].map(i => i + 1);
    setItems(pageItems);
  }, [totalCount]);

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

  if (isError) {
    return <Alert variant="danger">{errorMessage}</Alert>;
  }

  return (
    <Fragment>
      <PreviewPhotoModal show={show} url={url} handleClose={handleCloseModal} />
      <Container>
        {!loading && (
          <Row>
            <Col>
              <h3>
                Number of favorite photos: {Object.keys(favoritePhotos).length}
              </h3>
            </Col>
          </Row>
        )}

        <Row className="my-3">
          {loading ? (
            <SpinnerWrapper>
              <Spinner animation="border" variant="primary" size="xl" />
            </SpinnerWrapper>
          ) : (
            photoList.map(item => (
              <Col sm={3} key={item.id} className="p-0">
                <PhotoItem
                  data={item}
                  likeStatus={
                    favoritePhotos[item.id] ? favoritePhotos[item.id] : false
                  }
                  onChangeLikeStatus={onChangeLikeStatus}
                  onPreview={onPreview}
                />
              </Col>
            ))
          )}
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

PhotoItems.propTypes = {
  loading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  totalCount: PropTypes.number.isRequired,
  favoritePhotos: PropTypes.object.isRequired,
  photoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      albumId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    isError: state.isError,
    errorMessage: state.errorMessage,
    totalCount: state.totalCount,
    favoritePhotos: state.favoritePhotos,
    photoList: state.photoList
  };
};

export default connect(mapStateToProps)(PhotoItems);
