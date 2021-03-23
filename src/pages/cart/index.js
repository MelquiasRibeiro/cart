import React,{useState,useEffect} from 'react'
import {Container,CartContainer,Header,Total,Footer,Button} from './styles'
import CartItem from '../../components/cartItem';
import api from '../../services/api'


export default function Cart() {

    const [items,setItems] = useState([]);

    useEffect(() => {
       api.get('').then((response)=>{
           setItems(response.data.items)
       })
    }, [])

    return (
        <Container>
            <CartContainer>
                <Header>
                    <strong>Meu carrinho</strong>
                </Header>
                {   
                    items.map((item)=>(
                        <CartItem 
                            key={item.id}
                            urlImage={item.imageUrl} 
                            name={item.name} 
                            price={item.price}
                        />
                    ))
                }
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
