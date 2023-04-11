let funcion = parseInt(prompt("Elija el numero de una función", 1));
let n = parseInt(prompt("Elija el numero a evaluar", 1));
Ufuncion(funcion);
function Ufuncion(numero) {
  if (numero === 1) {
    par(n);
  } else if (numero === 2) {
    d_divisores(n);
    primo(divisores);
  } else if (numero === 3) {
    sig_primo(n);
  } else if (numero === 4) {
    cuadrado(n);
  } else console.log("La función no existe");
}

function par(numero) {
  if (numero % 2 === 0) console.log(`El numero ${n} es par`);
  else console.log(`El numero ${n} es impar`);
}

function d_divisores(numero) {
  divisores = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) divisores++;
  }
}

function primo(numero) {
  if (numero === 2) console.log(`El numero ${n} es primo`);
  else console.log(`El numero ${n} no es primo`);
}

function sig_primo(numero) {
  divisores = 0;
  while (divisores !== 2 || divisores === 0) {
    numero += 1;
    d_divisores(numero);
  }
  console.log(`El siguiente numero primo es ${numero}`);
}

function cuadrado(numero) {
  for (let i = 1; i <= numero; i++) {
    let square = "";
    for (let j = 1; j <= numero; j++) {
      square += "*";
    }
    console.log(square);
  }
}
