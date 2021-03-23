import React from 'react'
import{AiOutlineLoading3Quarters} from 'react-icons/ai'
import{Container,Picture,Info} from './styles';
import {FormatPrice} from '../../utils/formatPrice'

export default function CartItem({urlImage,name,price,sellingPrice,loading}) {
    
    return (
        <Container loading={loading}>  
        {
        loading 
        ? <AiOutlineLoading3Quarters size={36} color='#000'/>    
        :   
        <>
        <Picture src={urlImage}/>
        <Info>
            <strong>
                {name}
            </strong>
            <p>
                {FormatPrice(price)}
            </p>
            <strong>
                {FormatPrice(sellingPrice)}
            </strong>
        </Info>
    </>
        }
      
        </Container>
    )
}
