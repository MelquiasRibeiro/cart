import React from 'react'
import {Container,CartContainer,Header,Total,Footer,Button} from './styles'
import CartItem from '../../components/cartItem';

export default function Cart() {
    return (
        <Container>
            <CartContainer>
                <Header>
                    <strong>Meu carrinho</strong>
                </Header>
                <CartItem/>
                <Total>
                    <strong>Total</strong>
                    <strong>R$ 9,55</strong>
                </Total>
                <Footer>
                    <Button>
                        Finalizar comprar
                    </Button>
                </Footer>
            </CartContainer>
        </Container>
    )
}
