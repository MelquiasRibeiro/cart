import React from 'react'

import{Container,Picture,Info} from './styles';

export default function CartItem() {
    return (
        <Container>
            <Picture/>
            <Info>
                <strong>
                    Trufa
                </strong>
                <p>
                    R$ 1,23
                </p>
                <strong>
                    R$ 1,11
                </strong>
            </Info>
        </Container>
    )
}
