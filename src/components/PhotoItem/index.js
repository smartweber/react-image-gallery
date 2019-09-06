import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import {
  Image,
  PhotoItemWrapper,
  ContentWrapper,
  ActionWrapper,
  TitleWrapper,
  BgWrapper
} from './styles';

const PhotoItem = ({ data, likeStatus, onChangeLikeStatus, onPreview }) => {
  const likeButtonContent = likeStatus ? (
    <div>
      <span className="glyphicon glyphicon-thumbs-up"></span> Unlike
    </div>
  ) : (
    <div>
      <span className="glyphicon glyphicon-thumbs-up"></span> Like
    </div>
  );

  return (
    <PhotoItemWrapper>
      <Image src={data.thumbnailUrl} alt="Thumbnail" />

      <ContentWrapper className="content-wrapper">
        <BgWrapper />
        <ActionWrapper>
          <Button
            className="mr-3"
            outline
            color="primary"
            onClick={() => onPreview(data.url)}
          >
            Preview
          </Button>

          <Button
            outline
            color={likeStatus ? 'warning' : 'success'}
            onClick={() => onChangeLikeStatus(data.id)}
          >
            {likeButtonContent}
          </Button>
        </ActionWrapper>

        <TitleWrapper>{data.title}</TitleWrapper>
      </ContentWrapper>
    </PhotoItemWrapper>
  );
};

PhotoItem.propTypes = {
  data: PropTypes.object.isRequired,
  likeStatus: PropTypes.bool.isRequired,
  onChangeLikeStatus: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired
};

export default PhotoItem;
