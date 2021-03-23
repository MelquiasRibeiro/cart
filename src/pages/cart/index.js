import React,{useState,useEffect} from 'react'
import {Container,CartContainer,Header,Total,Footer,Button,SwitchCartButton} from './styles'
import CartItem from '../../components/cartItem';
import {FormatPrice} from  '../../utils/formatPrice'
import axios from 'axios';
import notify from '../../utils/notification'

export default function Cart() {
    const [items,setItems] = useState([]);
    const [value,setValue]  = useState(0);
    const [freeShipping,setFreeShipping]  = useState(false);
    const [loading, setLoading]= useState(false);


    const urlFreeShipping ='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210323T180905Z&X-Amz-Expires=86400&X-Amz-Signature=2da719066ad2c421b690706e4e3ffd50ef364069d11b1cf162db4d35a279e513&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22';
    const urlPayShipping='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210323T181316Z&X-Amz-Expires=86400&X-Amz-Signature=e95e423da061e4673acdfe0c5c16698789fb6bdcbae0a96c31d4d97026f8bb76&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22'

    useEffect(() => {
       setLoading(true);
       axios.get(freeShipping?urlFreeShipping:urlPayShipping)
       .then((response)=>{
           setItems(response.data.items)
           setValue(response.data.value);
       })
       .catch((err) => {
        notify('houve um erro ao carregar seu carrinho :(', 'error');
        console.log(err)
      }).finally(()=>{
          setLoading(false);
      });
    }, [freeShipping])

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
                            sellingPrice={item.sellingPrice}
                            loading={loading}
                        />
                    ))
                }
                <Total>
                    <div>
                        <strong>Total</strong>
                        <strong>{value !== 0 ? FormatPrice(value):'R$ 0,00'}</strong>
                    </div>
                    {
                    value>=1000?
                    <span>Parabéns, sua compra tem frete grátis !</span>:null
                    }
                </Total>
                <Footer>
                    <Button onClick={()=>notify('compra realizada com sucesso!','sucess')}>
                        Finalizar comprar
                    </Button>
                </Footer>
            </CartContainer>

            <SwitchCartButton onClick={()=>setFreeShipping(!freeShipping)}>
                {
                freeShipping?
                'Ver carrinho sem frete Grátis':
                'Ver carrinho com frete Grátis'
                }
            </SwitchCartButton>
        </Container>
    )
}
