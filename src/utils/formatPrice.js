export function FormatPrice(price) {
  if(price.toString().length>=4){
    const Decimal =  Number(`${price.toString()[0]}${price.toString()[1]}.${price.toString()[2]}${price.toString()[3]}`)
  
    return Decimal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  }

  const Decimal =  Number(`${price.toString()[0]}.${price.toString()[1]}${price.toString()[2]}`)
  
  return Decimal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}