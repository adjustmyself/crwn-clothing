import styled from 'styled-components';

export const CheckoutItem = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
    @media screen and (max-width:800px) {
        font-size: 16px;
    }
`;

export const CheckOutImage = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
    width: 100%;
    height: 100%;
    }
    @media screen and (max-width:800px) {
        width: 20%;
        padding: 5px;
    }    
`;

export const TextContainer = styled.span`
    width: 23%;
    @media screen and (max-width:800px) {
        width: 20%;
        padding-left:15px;
    }
`;

export const QuantityContainer = styled(TextContainer)`
    display: flex;
    div {
    cursor: pointer;
    }
    span {
    margin: 0 10px;
    }
    @media screen and (max-width:800px) {
        width: 20%;
        padding-left:10px;
    }
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
    @media screen and (max-width:800px) {
        padding-left: 18px;
    }
`; 