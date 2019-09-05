import { connect } from 'react-redux';
import PhotoList from '../components/PhotoList';

const mapStateToProps = state => {
  return {
    photoList: state.photoList
  };
};

const PhotoListContainer = connect(mapStateToProps)(PhotoList);

export default PhotoListContainer;
