"use strict";

// A soma de todos os numeros dividido pela quantidade de numeros

function CalcMedia() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var digitos = numbers.length;
  var soma = numbers.reduce(function (valorAtual, num) {
    return valorAtual += num;
  }, 0);
  return {
    digitos: digitos,
    soma: soma,
    numbers: numbers
  };
}
var arry = [CalcMedia(4, 5, 2, 6)];
console.log("Seu total de pontos foi ".concat(arry[0].soma, " porem a sua media esta em ").concat((arry[0].soma / arry[0].digitos).toFixed(1)));
"use strict";

// Media ponderada é a soma de todos os pontos junto com os pesos depois dividido pelos pesos 

function medPonderada() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  console.log(objs);
  var pesos = 0;
  var total = 0;
  objs.map(function (elemento) {
    total = total + elemento.p * elemento.m;
    pesos += elemento.p;
  });
  var media = total / pesos;
  console.log("A media ponderada foi de ".concat(media));
}
medPonderada({
  m: 7,
  p: 2
}, {
  m: 9,
  p: 5
}, {
  m: 3,
  p: 1
});
"use strict";

// Mediana é o numero que esta no meio de uma lista

function mediana() {
  if (arguments.length % 2 !== 0) {
    var _ref;
    return _ref = (arguments.length - 1) / 2, _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref];
  } else {
    var _ref2, _ref3;
    return ((_ref2 = (arguments.length - 2) / 2, _ref2 < 0 || arguments.length <= _ref2 ? undefined : arguments[_ref2]) + (_ref3 = (arguments.length - 2) / 2 + 1, _ref3 < 0 || arguments.length <= _ref3 ? undefined : arguments[_ref3])) / 2;
  }
}
console.log(mediana(6, 2, 5, 7, 9, 9));
"use strict";

// Moda é o numero que mais se repete em um lista

function moda() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var quantities = numbers.map(function (e) {
    return [e, numbers.filter(function (num) {
      return e === num;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
}
console.log(moda(5, 6, 8, 8, 4, 6, 6));
