import React from 'react'

import{Container,Picture,Info} from './styles';

export default function CartItem({urlImage,name,price}) {
    return (
        <Container>
            <Picture src={urlImage}/>
            <Info>
                <strong>
                    {name}
                </strong>
                <p>
                    R$ {price}
                </p>
                <strong>
                    R$ {price}
                </strong>
            </Info>
        </Container>
    )
}
