import styled from 'styled-components';

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const TitleContainer = styled.h2`
    margin: 10px 0;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
