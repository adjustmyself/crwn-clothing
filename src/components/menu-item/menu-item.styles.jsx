import styled,{ css } from 'styled-components';

const large = css`
    height: 380px;
`;

const containerSize = ({size}) => {
  if(size === 'large') {
  return large;
  } else {
  return null;
  }
}

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    ${containerSize}
  
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }
    &:hover {
      cursor: pointer;
    
      & .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
    
      & .content {
        opacity: 0.9;
      }
    }
`

export const BackgroundImageContainer = styled.div`
  height: 100%;
  width: 100%;
  background: center;
  background-size: cover;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color:white;
    opacity: 0.7;
    position: absolute;
`;

export const TitleContainer = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;

export const SubTitleContainer = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;