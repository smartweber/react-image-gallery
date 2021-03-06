import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const PhotoItemWrapper = styled.div`
  position: relative;

  &:hover {
    .content-wrapper {
      display: block;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ActionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 1em;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  color: #fff;
  padding: 1em;
`;

export const BgWrapper = styled.div`
  background: #000;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;
