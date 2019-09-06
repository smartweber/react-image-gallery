import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './styles';

const PhotoItem = ({ data }) => {
  return (
    <div>
      <Image src={data.thumbnailUrl} alt="Thumbnail" />
      <div>{data.title}</div>
    </div>
  );
};

PhotoItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default PhotoItem;
