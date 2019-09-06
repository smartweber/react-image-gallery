import { connect } from 'react-redux';
import PhotoItems from '../components/PhotoItems';

const mapStateToProps = state => {
  return {
    loading: state.loading,
    isError: state.isError,
    totalCount: state.totalCount,
    errorMessage: state.errorMessage,
    photoList: state.photoList,
    favoritePhotos: state.favoritePhotos
  };
};

const PhotoListContainer = connect(mapStateToProps)(PhotoItems);

export default PhotoListContainer;
