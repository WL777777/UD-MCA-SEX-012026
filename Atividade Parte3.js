// Array contendo 10 produtos, cada um com as propriedades nome, preço e estoque
let produtos = [
  { nome: 'Camiseta',      preco: 59.90,  estoque: 25 },
  { nome: 'Calça Jeans',   preco: 149.90, estoque: 12 },
  { nome: 'Tênis',         preco: 289.90, estoque: 8  },
  { nome: 'Boné',          preco: 59.90,  estoque: 15 },
  { nome: 'Jaqueta',       preco: 199.90, estoque: 6  },
  { nome: 'Meia',          preco: 24.90,  estoque: 40 },
  { nome: 'Bermuda',       preco: 74.90,  estoque: 10 },
  { nome: 'Moletom',       preco: 124.90, estoque: 7  },
  { nome: 'Vestido',       preco: 99.90,  estoque: 9  },
  { nome: 'Blusa',         preco: 89.90,  estoque: 18 }
];

// A - O segundo objeto do array está localizado no índice 1
console.log("Preço do segundo objeto:", produtos[1].preco);

// B - O terceiro objeto do array está localizado no índice 2
console.log("Nome do terceiro objeto:", produtos[2].nome);

// C - Utilizando a propriedade length para obter a quantidade total de itens no array
console.log("Total de itens:", produtos.length);

// D - Percorrendo o array com um laço for para imprimir o nome de cada produto
for (let i = 0; i < produtos.length; i++) {
  console.log(`Produto ${i + 1}: ${produtos[i].nome}`);
}

// E - Utilizando um for para somar o estoque total de todos os produtos
let totalEstoque = 0;
for (let i = 0; i < produtos.length; i++) {
  totalEstoque += produtos[i].estoque;
}
console.log("Total em estoque:", totalEstoque);

// F - Comparando os valores para identificar qual produto possui o maior estoque
let maiorEstoque = produtos[0];
for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = produtos[i];
  }
}
console.log("Produto com maior estoque:", maiorEstoque.nome, "- quantidade:", maiorEstoque.estoque);
