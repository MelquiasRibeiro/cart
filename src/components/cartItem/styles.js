import styled,{ keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg)
  }
`;


export const Container = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  padding:16px;
  align-items:center;
  
  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s infinite;
        }
    `}
`;

export const Picture = styled.img`
    width:100px;
    height:110px;
    margin-right:16px;
    border:solid 1px #e5e5e5;

`;
export const Info = styled.div`
    padding:16px 0;
    
    p{
        margin:8px 0;
        color: #D2D5E6;
    }

`;
