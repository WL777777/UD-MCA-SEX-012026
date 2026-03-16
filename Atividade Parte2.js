// Criando um objeto chamado produto com as propriedades solicitadas
let produto = {
  nome: 'Camisa Seleção Brasileira 2026',
  cor: 'Amarela',
  preco: 449.99,
  estoque: 70
};

// A - Acessando a propriedade "nome" utilizando a notação de ponto
console.log("Nome:", produto.nome);

// B - Acessando a propriedade "preço" utilizando a notação de colchetes
console.log("Preço:", produto['preco']);

// C - Atualizando o valor da propriedade "estoque" para 80 unidades
produto.estoque = 80;
console.log("Estoque atualizado:", produto.estoque);

// D - Exibindo no console todas as propriedades do objeto produto
console.log("Nome:", produto.nome);
console.log("Cor:", produto.cor);
console.log("Preço:", produto.preco);
console.log("Estoque:", produto.estoque);
