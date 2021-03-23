import styled from 'styled-components';

export const Container = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin: 50px 0;
`;
export const CartContainer =styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#ffffff;
    min-width:500px;
    border-radius:8px;
    -webkit-box-shadow: 11px 21px 28px -8px rgba(0,0,0,0.25);
    -moz-box-shadow: 11px 21px 28px -8px rgba(0,0,0,0.25);
    box-shadow: 11px 21px 28px -8px rgba(0,0,0,0.25);
`;
export const Header = styled.div`
    text-align:center;
    width:100%;
    font-size:24px;
    padding:8px;
    border-bottom: solid 1px #e5e5e5;
`;
  
export const Total  = styled.div` 
        width:100%;
        display:flex;
        flex-direction:column;
        padding:16px;
        font-size:24px;
        border-top: solid 1px #e5e5e5;
        border-bottom: solid 1px #e5e5e5;
        >div{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        }
        >span{
            text-align:center;
            margin-top:24px;
            color:#56C357;
            background-color:#AFEDA3;
            padding:8px;
            border-radius:32px;
            font-weight:bold;
        }
`;
  
export const Footer = styled.div` 
        padding:16px;
        display:flex;
        align-items:center;
        justify-content:center;
        width:100%;
`;
  
export const Button = styled.button`
    height:40px;
    width:100%;
    padding:8px;
    border:none;
    border-radius:4px;
    background-color:#0D78F9;
    font-size:18px;
    font-weight:bold;
    transition: opacity 0.2s;
    :hover{
        opacity:0.8;
    }
`;
  

export const SwitchCartButton = styled.button`
    margin-top:40px;
    height:40px;
    padding:8px;
    border:none;
    border-radius:4px;
    background-color:#343A40;
    font-size:18px;
    font-weight:bold;
    transition: opacity 0.2s;
    :hover{
        opacity:0.8;
    }

`;

