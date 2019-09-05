import { connect } from 'react-redux';
import PhotoList from '../components/PhotoList';

const mapStateToProps = state => {
  return {
    loading: state.loading,
    photoList: state.photoList,
    favoritePhotos: state.favoritePhotos
  };
};

const PhotoListContainer = connect(mapStateToProps)(PhotoList);

export default PhotoListContainer;
