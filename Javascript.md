# VARIÁVEIS

Variáveis no javascript não possuem tipagem estática, elas podem assumir diversos tipos de dados durante a execução do programa. Uma variável pode ser do tipo **var, let  **ou **const**.

```javascript
var variavel1 = "Daniel Gustavo Favero"
let variavel2 = 13
const variavel3 = ['a', 'b', 'c']
```

### Hoisting

​	Ao declararmos uma variável ou função, ela é elevada (hoisting) ao topo do escobo de sua declaração após o processo de compilação.

- Variáveis do tipo **var** podem ser acessados antes da sua declaração e fora de seu escopo de declaração.
- Variáveis do tipo **let **e **const**  possuem escobo de bloco e podem apenas ser acessadas no bloco que foram declaradas. 

```javascript
var teste = function() {
     if(true) { 
         var varEscopo = 'variável var no escopo da função'; 
         let letEscopo = 'variável let no escopo da função';

        console.log(letEscopo); // variável let no escopo da função
    } 
    console.log(varEscopo); // variável var no escopo da função 
    console.log(letEscopo); 
}

teste(); // Imprime 'variável let no escopo da função', 'variável var no escopo da função' e dá um erro
```



# FUNÇÕES

Há duas formas de declarar funções:

1. **Funções convencionais:**

   ```javascript
   function name([param,[, param,[..., param]]]) {
      [statements]
   }
   ```

2. **Arrow functions:**

   ```javascript
   const sum = (num1, num2) => {
     return num1 + num2;
   }
   
   //ou apenas
   
   const sum = (num1, num2) => num1 + num2;
   ```



​	Arrow funcitons possuem sintaxes mais curtas, não possuem seus  próprios *this, arguments, super, new target* e não podem ser usadas como construtores de classes. Elas são melhores aplicadas para funções que não são métodos.

```javascript
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]

```



# ESTRUTURAS DE REPETIÇÃO

1. **FOR**: Estrutra convencional para repetir n vezes um bloco de códigos

   ```javascript
   for (var i = 0; i <= 10; i++) {
       [statements]
   }
   ```



2. **FOR IN**: Utilizado para iterar um array. Essencial quando não sabemos o tamanho dele

   ```javascript
   var arr = [1,2,3];
   for(var n in arr) {
     console.log(n);
     // expected output: 1, 2, 3
   }
   ```

   

3. **FOREACH**: Usado quando queremos percorrer propriedades de um objeto ou array.

   ```javascript
   var arr = [1,2,3];
   arr.forEach(value => {  
       console.log(value);
       // expected output: 1, 2, 3
     }
   );
   ```



# MANIPULAÇÃO DE ARRAYS

1. **MAP:** Percorre o array e realiza operações com seus elementos, **retornando um novo array**.

   ```javascript
   let numeros = [1, 2, 3];
   
   let novosNumeros = numeros.map(item => item * 10);
   console.log(novosNumeros); // [10, 20, 30]
   ```



2. **JOIN:** Junta vários elementos de um array e **retorna uma string** com os elementos do array unidos pelo char passado como parâmetro.

   ```javascript
   let numeros = [1, 2, 3];
   
   numeros.join(',');
   console.log(numeros); //"10, 20, 30"
   ```

   

3. **SPLIT:** Divide uma string a partir de um char passado como critério de divisão, no final ele **retorna um array.**

   ```javascript
   const vet = '2019-11-21'.split('-');
   
   console.log(vet); // ["2019", "11", "21"]
   ```



5. **PUSH:** Adiciona novos elementos no final do array e **retorna o novo comprimento do array.**

   ```javascript
   let numeros = [1, 2, 3];
   
   const tam = numeros.push(4);
   
   console.log(tam); // 4
   console.log(numeros) // 1, 2, 3, 4
   ```

   

6. **UNSHIFT:** Adiciona novos elementos no início do array

   ```javascript
   var vetor1 = new Array(1, 2, 3, 4, 5);
   
   vetor1.unshift(-1, 0);
   console.log(vetor1); // [-1,0,1,2,3,4,5]
   ```



7. **FILTER:** **Retorna um novo array** com todos os elementos filtrados através da função passada como parâmetro.

   ```javascript
   let numeros = [1, 2, 3];
   
   numeros = numeros.filter((item) => {
   	return item > 1;
   });
   
   console.log(numeros) // 2, 3, 4
   ```

   

8. **CONCAT:** **Retorna um novo array (uma cópia)** com a junção de todos os elementos dos arrays passados como parâmetro.

   ```javascript
   var num1 = [1, 2, 3];
   var num2 = [4, 5, 6];
   var num3 = [7, 8, 9];
   var nums = num1.concat(num2, num3);
   
   console.log(nums); // [1,2,3,4,5,6,7,8,9]
   ```

   

9. **REDUCE:** Processa um array e **retorna um valor único no final**. Ela recebe um método com dois parâmetros, o primeiro vai acumular o resultado de todas as iterações e o segundo é a posição atual do array. O segundo parâmetro do reduce é a inicialização da variável que acumula o resultado das operações.

   ```javascript
   // a variável acumulator começa em 0 e i começa em 0
   var reduced = [1,2,3].reduce(function(acumulator, i) {
   	acumulator + i;
   }, 0); // 6
   ```



10. **LENGTH:** **Retorna o tamanho do array**. Se atribuir 0 para essa propriedade, esvaziamos o array

    ```javascript
    [2, 5, 6].length = 0;
    [2, 5, 6] = [] // outra forma de zerar um vetor;
    ```



11. **FIND:** procura o primiero valor valor dentro do array que obedece um critério. Caso for encontrado ele **retorna esse valor, caso contrário *undefined*.**

    ```javascript
    const arr = [1,2,3,4,5,6,7,8,9,10]
    const found = arr.find((item) => item === 2)
    console.log(found) //2
    ```



12. **SOME:** procura o primiero valor valor dentro do array que obedece um critério. Caso for encontrado ele **retorna true, caso contrário false.**

    ```javascript
    const arr = [1,2,3,4,5,6,7,8,9,10]
    const found = arr.some((item) => item === 2)
    console.log(found) //true
    ```

    

13. **INDEXOF:** Recebe como parâmetro um valor a ser localizado no array. Caso o valor for encontrado **retorna a posição dele, caso contrário -1**.

    ```javascript
    var vetor1 = new Array(1, 2, 3, 4, 5);
    var indice = vetor1.indexOf(3);
    console.log(indice); // 2
    ```

    

14. **POP:** Remove **retorna o último elemento do array.**

    ```javascript
    var vetor1 = new Array(1, 2, 3, 2, 7);
    var ultimo = vetor1.pop();
    console.log(ultimo); // 7
    ```

    

15. **SHIFT:** Remove **retorna o primeiro elemento do array.**

    ```javascript
    var vetor1 = new Array(1, 2, 3, 4, 5);
    var primeiro = vetor1.shift();
    console.log(primeiro); // 1
    ```



16. **SLICE:** Recebe como parâmetro dois números inteiros e **retorna uma fração do vetor original com base nos limites que foram informados.**

    ```javascript
    var vetor1 = new Array(1, 2, 3, 4, 5);
    var selecao = vetor1.slice(1, 4);
    console.log(selecao); // [2, 3, 4]
    ```

    

17. **SORT:** Ordena os elementos do array em ordem crescente. É possível passar um função de ordenação como parâmetro.

    ```javascript
    var vetor1 = new Array(3, 2, 1, 5, 4);
    vetor1.sort();
    console.log(vetor1); // 1,2,3,4,5
    ```



18. **SPLICE:** Serve para remover e/ou adicionar items de um array. O primeira parâmetro representa a posição do elemento a ser removido e o segundo é a quantidade de elementos a serem removidos a partir da posição indicada (caso não queira remover nenhum valor após o indicado é possível informar 0 como segundo parâmetro).

    ```javascript
    var vetor1 = new Array(1, 2, 3, 4, 5);
    vetor1.splice(1,2);
    console.log(vetor1); // 2, 3
    ```

    

19. **TOSTRING**: Converte o vetor para string, com seus elementos separados por vírgula.

    ```javascript
    var vetor1 = new Array(-1, 0 ,1, 2, 3, 4, 5);
    var texto = vetor1.toString();
    console.log(texto); // "-1,0,1,2,3,4,5"
    ```

    