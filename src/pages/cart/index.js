import React,{useState,useEffect} from 'react'
import {Container,CartContainer,Header,Total,Footer,Button} from './styles'
import CartItem from '../../components/cartItem';
import api from '../../services/api'
import {FormatPrice} from  '../../utils/formatPrice'

export default function Cart() {
    const [items,setItems] = useState([]);
    const [value,setValue]  = useState(0);

    useEffect(() => {
       api.get('').then((response)=>{
           setItems(response.data.items)
           setValue(response.data.value);
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
                    <div>
                        <strong>Total</strong>
                        <strong>{FormatPrice(value)}</strong>
                    </div>
                    {
                    value>=1000?
                    <span>Parabéns, sua compra tem frete grátis !</span>:null
                    }
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
