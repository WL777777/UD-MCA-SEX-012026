// meu array com 21 frutas diferentes
let frutas = [
  'Maçã',        // 0
  'Banana',      // 1
  'Laranja',     // 2
  'Uva',         // 3
  'Morango',     // 4
  'Abacaxi',     // 5
  'Manga',       // 6
  'Pera',        // 7
  'Melancia',    // 8
  'Kiwi',        // 9
  'Cereja',      // 10
  'Coco',        // 11
  'Limão',       // 12
  'Melão',       // 13
  'Goiaba',      // 14
  'Mamão',       // 15
  'Framboesa',   // 16
  'Amora',       // 17
  'Abacate',     // 18
  'Caqui',       // 19
  'Tangerina'    // 20
];

// A - acessando as posições pedidas
console.log("Posição 0:", frutas[0]);
console.log("Posição 7:", frutas[7]);
console.log("Posição 11:", frutas[11]);
console.log("Posição 15:", frutas[15]);
console.log("Posição 18:", frutas[18]);
console.log("Posição 20:", frutas[20]);

// B - pra pegar a penúltima e última uso o length como referência
console.log("Penúltima:", frutas[frutas.length - 2]);
console.log("Última:", frutas[frutas.length - 1]);

// C - o length já me diz quantos elementos tem
console.log("Total de elementos:", frutas.length);

// D - adicionando um novo elemento no final com push
frutas.push('Pitanga');
console.log("Novo total após o push:", frutas.length);

// E - percorrendo tudo com for
for (let i = 0; i < frutas.length; i++) {
  console.log(`Posição ${i}: ${frutas[i]}`);
}
