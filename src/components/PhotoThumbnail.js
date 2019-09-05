import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './styles';

const PhotoThumbnail = ({ thumbnailUrl }) => {
  return <Image src={thumbnailUrl} alt='Thumbnail' />;
};

PhotoThumbnail.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired
};

export default PhotoThumbnail;
