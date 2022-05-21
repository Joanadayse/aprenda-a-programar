//verifica se é naconal ou internacional e aplica 20% de imposto caso seja de outro país  e 12% caso seja brasileiro.

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true}
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true}
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false}


if (produtoC.internacional == true) {
    
    let valorImpostos = produtoC.valor * 1.2
   
    console.log("O produto é internacional")
    console.log(valorImpostos)

} else {
    let valorImpostos = produtoC.valor * 1.12
    console.log("O produto é nacional")
    console.log(valorImpostos)   
}
