import { connect } from 'react-redux';
import PhotoList from '../components/PhotoList';

const mapStateToProps = state => {
  return {
    loading: state.loading,
    isError: state.isError,
    totalPhotos: state.totalPhotos,
    errorMessage: state.errorMessage,
    photoList: state.photoList,
    favoritePhotos: state.favoritePhotos
  };
};

const PhotoListContainer = connect(mapStateToProps)(PhotoList);

export default PhotoListContainer;
