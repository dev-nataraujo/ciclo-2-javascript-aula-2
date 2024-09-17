// Desafio 1
//Você foi chamado para ajudar a pintar uma parede em uma casa.
// A parede tem formato retangular, e você precisa saber quantos metros quadrados de tinta serão necessários para cobri-la. Para isso, você deve calcular a área da parede.
// A parede tem 4 metros de altura e 5 metros de largura.

//Para calcular a área de um retângulo, usamos a seguinte fórmula:
// area = largura * altura;

// Dimensões da parede (largura e altura em metros)
var largura = 5;
var altura = 4;
var area = largura*altura;

// Calculando a área da parede
      //seu código console.log("A área da parede é: "+area+".")

// Exibindo o resultado no console
console.log("A área da parede é: "+area+".");

// Criei uma nova variável chamada "área" utilizando as outras duas variáveis já criadas "largura" e "altura", inclui a informação em texto + a variável "area".

//-------------------------------------------------------------------------------------------------

// Desafio 2

// Imagine que você está desenvolvendo um sistema de cadastro para uma empresa.
// Quando um usuário se cadastra, ele insere seu nome e sobrenome em campos separados.
// Você precisa juntar essas duas informações para formar o nome completo do usuário e exibir uma mensagem de boas-vindas.

// Nome e sobrenome inseridos pelo usuário
var nome = "João";
var sobrenome = "Silva";
var nomecompleto = nome + " " + sobrenome;

// Juntando os nomes com a mensagem de boas-vindas
  
      //seu código console.log(nomecompleto+", bem-vindo à Cidade do Sol!")

// Exibindo a mensagem no console
console.log(nomecompleto+", bem-vindo à Cidade do Sol!");

// Criei uma nova variável "nomecompleto" utilizando as variáveis "nome" e "sobrenome", inclui no console.log a nova variável "nomecompleto" + texto de boas vindas.

//-------------------------------------------------------------------------------------------------


//Desafio 3

// Você está trabalhando no departamento de recursos humanos de uma empresa, e precisa
// calcular quantos dias um funcionário já viveu até agora, com base na idade informada.
// O funcionário informa sua idade em anos e você deve converter esse valor para dias,
// considerando que todos os anos têm 365 dias.

// Idade do funcionário em anos
var idadeEmAnos = 30;
var ano = 365;
var diasVividos = idadeEmAnos*ano;

// Calculando anos em dias
  
      //seu código console.log(idadeEmAnos*365)


// Exibindo o resultado no console
console.log("O funcionário viveu, aproximadamente, "+diasVividos+" dias.");

// Criei a variável "ano" informando quantos dias tem em um ano e a variável "diasVividos", utilizando a variável "idadeEmAnos" multiplicada por "ano"
// inclui no console.log o texto complementar da resposta + a variável "diasVividos" + texto complementar da resposta.  

//-------------------------------------------------------------------------------------------------


// Desafio 4

// Você trabalha em uma empresa de eventos, e foi solicitado a calcular quanto tempo
// um evento durou. Você recebeu o total de minutos que o evento durou, mas precisa
// converter esse valor em horas e minutos para gerar um relatório. Por exemplo,
//  se o evento durou 135 minutos, você deve dizer que ele durou 2 horas e 15 minutos.

// Duração total do evento em minutos
var duracaoEmMinutos = 135;
var horaEmMinutos = 60;
var horas = Math.floor(duracaoEmMinutos/horaEmMinutos);
var minutos = (duracaoEmMinutos/horaEmMinutos-horas)*horaEmMinutos;
var restoEmMinutos = duracaoEmMinutos%horaEmMinutos

// Calculando horas e minutos
  
      //seu código - 1ª opção > console.log("O evento durou "+horas+" horas e "+minutos+" minutos.");

// Exibindo o resultado no console
console.log("O evento durou "+horas+" horas e "+minutos+" minutos.");

// Criei a variável "horaEmMinutos" que define quantos minutos tem em uma hora;
// Criei a variável "horas" utilizando a função Math.floor, a qual arrendonda o valor para o mais próximo inteiro de menor valor;
// Criei a variável "minutos" utilizando a variável "duracaoEmMinutos" para dividir com "horasEmMinutos" e subtrair o valor inteiro correspondente ao valor das horas
// toda essa operação foi colocada entre parêntese para definir um valor único a ser multiplicado com a variável "horaEmMinutos" (na matemática, resolve-se 1º a multiplicação);
// Coloquei no console.log texto complementar da resposta + variável "horas" + texto complementar + vairável "minutos" + texto complementar.

      //seu código - 2ª opção > console.log("O evento durou "+horas+" horas e "+restoEmMinutos+" minutos.");

console.log("O evento durou "+horas+" horas e "+restoEmMinutos+" minutos.");

// Criei a variável "horaEmMinutos" que define quantos minutos tem em uma hora;
// Criei a variável "horas" utilizando a função Math.floor, a qual arrendonda o valor para o mais próximo inteiro de menor valor;
// Criei a variável "restoEmMinutos" utilizando a variável "duracaoEmMinutos" com o operador "%" (referente ao cálculo de mod, em que se obtém o resto de uma determinada divisão),
// juntamente com a variável "horaEmMinutos";
// Coloquei no console.log texto complementar da resposta + variável "horas" + texto complementar + variável "restoEmMinutos" + texto complementar.