import React from 'react'

import{Container,Picture,Info} from './styles';
import {FormatPrice} from '../../utils/formatPrice'

export default function CartItem({urlImage,name,price}) {
    
    return (
        <Container>
            <Picture src={urlImage}/>
            <Info>
                <strong>
                    {name}
                </strong>
                <p>
                    {FormatPrice(price)}
                </p>
                <strong>
                    {FormatPrice(price)}
                </strong>
            </Info>
        </Container>
    )
}
