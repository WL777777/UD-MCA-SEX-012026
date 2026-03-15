// array com 10 produtos, cada um tem nome, preco e estoque
let produtos = [
  { nome: 'Camiseta',      preco: 49.90,  estoque: 100 },
  { nome: 'Calça Jeans',   preco: 149.90, estoque: 60  },
  { nome: 'Tênis',         preco: 299.90, estoque: 35  },
  { nome: 'Boné',          preco: 39.90,  estoque: 80  },
  { nome: 'Jaqueta',       preco: 199.90, estoque: 25  },
  { nome: 'Meia',          preco: 14.90,  estoque: 200 },
  { nome: 'Bermuda',       preco: 79.90,  estoque: 55  },
  { nome: 'Moletom',       preco: 129.90, estoque: 40  },
  { nome: 'Vestido',       preco: 119.90, estoque: 30  },
  { nome: 'Blusa',         preco: 59.90,  estoque: 90  }
];

// A - segundo objeto é o índice 1
console.log("Preço do segundo objeto:", produtos[1].preco);

// B - terceiro objeto é o índice 2
console.log("Nome do terceiro objeto:", produtos[2].nome);

// C - usando length pra contar os itens
console.log("Total de itens:", produtos.length);

// D - percorrendo com for pra imprimir o nome de cada um
for (let i = 0; i < produtos.length; i++) {
  console.log(`Produto ${i + 1}: ${produtos[i].nome}`);
}

// E - somando o estoque de todos com um for
let totalEstoque = 0;
for (let i = 0; i < produtos.length; i++) {
  totalEstoque += produtos[i].estoque;
}
console.log("Total em estoque:", totalEstoque);

// F - comparando pra achar quem tem mais estoque
let maiorEstoque = produtos[0];
for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = produtos[i];
  }
}
console.log("Produto com maior estoque:", maiorEstoque.nome, "- quantidade:", maiorEstoque.estoque);
