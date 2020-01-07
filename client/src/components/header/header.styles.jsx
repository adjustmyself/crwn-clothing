import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    @media screen and (max-width: 800px) {
      height: 50px;
      margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 10px;
    }
`;

export const HeaderTitle = styled.div`
    padding: 15px;
    height:100%;
    font-size:36px;
    @media screen and (max-width: 800px){
        display:none;
    }
`;

export const OptionsContainer = styled.div`
    
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 800px) {
      font-size: 14px;
      width: 80%;
      padding-right: 20px;
    }
`;

export const OptionContainerLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

export const OptionContainerDiv = styled.div`
    padding: 10px 15px;
    cursor: pointer;
`;