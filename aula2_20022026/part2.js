// objeto produto com as propriedades pedidas
let produto = {
  nome: 'Tênis Nike Air Max',
  cor: 'Preto',
  preco: 599.90,
  estoque: 45
};

// A - acessando o nome pelo ponto
console.log("Nome:", produto.nome);

// B - acessando o preço usando colchetes
console.log("Preço:", produto['preco']);

// C - atualizando o estoque pra 80
produto.estoque = 80;
console.log("Estoque atualizado:", produto.estoque);

// D - imprimindo todas as propriedades
console.log("Nome:", produto.nome);
console.log("Cor:", produto.cor);
console.log("Preço:", produto.preco);
console.log("Estoque:", produto.estoque);
