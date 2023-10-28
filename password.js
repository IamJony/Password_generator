 letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "}", "|", "?", ">", "<", "~", "/", "-", "]", "="]      

const lettersRandom = () => letters[Math.floor(Math.random() * letters.length)]
const lettersToUpper = () => lettersRandom().toUpperCase()
const numbersRandom = () => (Math.floor(Math.random() * 9) +1).toString();
const symbolsRandom = () => symbols[Math.floor(Math.random() * symbols.length)]

function generateLetters(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    cadena += lettersRandom();
  } return cadena;
}

function generateUppercase(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    cadena += lettersToUpper();
  } return cadena;
}

function generateNumbers(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    cadena += numbersRandom();
  }
  return cadena;
}

function generateSymbols(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    cadena += symbolsRandom();
  }
  return cadena;
}


function generateLettersAndNumbers(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    const oneAndTwo = Math.floor(Math.random() * 2) + 1;
    const randomChar = oneAndTwo === 1 ? lettersRandom() : numbersRandom()
    cadena += randomChar;
  }
  return cadena;
}

function generateLettersAndUppercase(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    const oneAndTwo = Math.floor(Math.random() * 2) + 1;
    const randomChar = oneAndTwo === 1 ? lettersRandom() : lettersToUpper()
    cadena += randomChar;
  }
  return cadena;
}

function generateNumbersAndSymbols(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    const oneAndTwo = Math.floor(Math.random() * 2) + 1;
    const randomChar = oneAndTwo === 1 ? numbersRandom() : symbolsRandom()
    cadena += randomChar;
  }
  return cadena;
}

function generateNumbersAndUppercase(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    const oneAndTwo = Math.floor(Math.random() * 2) + 1;
    const randomChar = oneAndTwo === 1 ? numbersRandom() : lettersToUpper()
    cadena += randomChar;
  }
  return cadena;
}

function generateLettersAndSymbols(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    const oneAndTwo = Math.floor(Math.random() * 2) + 1;
    const randomChar = oneAndTwo === 1 ? lettersRandom() : symbolsRandom()
    cadena += randomChar;
  }
  return cadena;
}

function generateUppercaseAndSymbols(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    const oneAndTwo = Math.floor(Math.random() * 2) + 1;
    const randomChar = oneAndTwo === 1 ? lettersToUpper() : symbolsRandom()
    cadena += randomChar;
  }
  return cadena;
}

function generateLettersAndNumbersAndSymbols(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    const oneAndThre = Math.floor(Math.random() * 3) + 1;
    if ( oneAndThre === 1 ) {
    cadena += lettersRandom();
    } else if ( oneAndThre === 2 ) {
    cadena += numbersRandom()
    } else {
    cadena += symbolsRandom();
    }
  }
  return cadena;
}

function generateUppercaseAndNumbersAndSymbols(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    const oneAndThre = Math.floor(Math.random() * 3) + 1;
    if ( oneAndThre === 1 ) {
    cadena += lettersToUpper();
    } else if ( oneAndThre === 2 ) {
    cadena += numbersRandom()
    } else {
    cadena += symbolsRandom();
    }
  }
  return cadena;
}

function generateLettersAndUppercaseAndNumber(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    const oneAndThre = Math.floor(Math.random() * 3) + 1;
    if ( oneAndThre === 1 ) {
    cadena += lettersRandom();
    } else if ( oneAndThre === 2 ) {
    cadena += numbersRandom()
    } else {
    cadena += lettersToUpper();
    }
  }
  return cadena;
}
function generateLettersAndUppercaseAndSymbols(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    const oneAndThre = Math.floor(Math.random() * 3) + 1;
    if ( oneAndThre === 1 ) {
    cadena += lettersRandom();
    } else if ( oneAndThre === 2 ) {
    cadena += lettersToUpper()
    } else {
    cadena += symbolsRandom();
    }
  }
  return cadena;
}

function all(size) {
  let cadena = "";
  for (let i = 0; i < size; i++) {
    const oneAndFour = Math.floor(Math.random() * 4) + 1;
    if (oneAndFour === 1) {
      cadena += lettersRandom();
    } else if (oneAndFour === 2) {
      cadena += numbersRandom();
    } else if (oneAndFour === 3) {
      cadena += symbolsRandom();
    } else {
      cadena += lettersToUpper();
    }
  }
  return cadena;
}





document.addEventListener("DOMContentLoaded", function () {
  const lengthh = document.getElementById("lengthh");
  const uppercaseCheckbox = document.getElementById("uppercase");
  const valor = document.getElementById("valor");
  const password = document.getElementById("password");
  const lettersCheckbox = document.getElementById("letters");
  const numbersCheckbox = document.getElementById("numbers");
  const symbolsCheckbox = document.getElementById("symbols")
  const generate = document.getElementById("generate")
  
generate.addEventListener("click", function() {
  
  valor.textContent = lengthh.value;

if (lettersCheckbox.checked && numbersCheckbox.checked && symbolsCheckbox.checked && uppercaseCheckbox.checked) {
  password.textContent = all(lengthh.value);
} else if (lettersCheckbox.checked && numbersCheckbox.checked && symbolsCheckbox.checked) {
  password.textContent = generateLettersAndNumbersAndSymbols(lengthh.value);
} else if (lettersCheckbox.checked && numbersCheckbox.checked && uppercaseCheckbox.checked) {
  password.textContent = generateLettersAndUppercaseAndNumber(lengthh.value);
} else if (lettersCheckbox.checked && symbolsCheckbox.checked && uppercaseCheckbox.checked) {
  password.textContent = generateLettersAndUppercaseAndSymbols(lengthh.value);
} else if (numbersCheckbox.checked && symbolsCheckbox.checked && uppercaseCheckbox.checked) {
  password.textContent = generateUppercaseAndNumbersAndSymbols(lengthh.value);
}else if (lettersCheckbox.checked && numbersCheckbox.checked) {
  password.textContent = generateLettersAndNumbers(lengthh.value);
} else if (lettersCheckbox.checked && symbolsCheckbox.checked) {
  password.textContent = generateLettersAndSymbols(lengthh.value);
} else if (numbersCheckbox.checked && symbolsCheckbox.checked) {
  password.textContent = generateNumbersAndSymbols(lengthh.value);
} else if (lettersCheckbox.checked && uppercaseCheckbox.checked) {
  password.textContent = generateLettersAndUppercase(lengthh.value);
} else if (numbersCheckbox.checked && uppercaseCheckbox.checked) {
  password.textContent = generateNumbersAndUppercase(lengthh.value);
} else if (symbolsCheckbox.checked && uppercaseCheckbox.checked) {
  password.textContent = generateUppercaseAndSymbols(lengthh.value);
} else if (lettersCheckbox.checked) {
  password.textContent = generateLetters(lengthh.value);
} else if (numbersCheckbox.checked) {
  password.textContent = generateNumbers(lengthh.value);
} else if (symbolsCheckbox.checked) {
  password.textContent = generateSymbols(lengthh.value);
} else if (uppercaseCheckbox.checked) {
  password.textContent = generateUppercase(lengthh.value);
} else {
  password.textContent = "";
}
  })
  
  lengthh.addEventListener("input", function() {
    valor.textContent = lengthh.value;

if (lettersCheckbox.checked && numbersCheckbox.checked && symbolsCheckbox.checked && uppercaseCheckbox.checked) {
  password.textContent = all(lengthh.value);
} else if (lettersCheckbox.checked && numbersCheckbox.checked && symbolsCheckbox.checked) {
  password.textContent = generateLettersAndNumbersAndSymbols(lengthh.value);
} else if (lettersCheckbox.checked && numbersCheckbox.checked && uppercaseCheckbox.checked) {
  password.textContent = generateLettersAndUppercaseAndNumber(lengthh.value);
} else if (lettersCheckbox.checked && symbolsCheckbox.checked && uppercaseCheckbox.checked) {
  password.textContent = generateLettersAndUppercaseAndSymbols(lengthh.value);
} else if (numbersCheckbox.checked && symbolsCheckbox.checked && uppercaseCheckbox.checked) {
  password.textContent = generateUppercaseAndNumbersAndSymbols(lengthh.value);
}else if (lettersCheckbox.checked && numbersCheckbox.checked) {
  password.textContent = generateLettersAndNumbers(lengthh.value);
} else if (lettersCheckbox.checked && symbolsCheckbox.checked) {
  password.textContent = generateLettersAndSymbols(lengthh.value);
} else if (numbersCheckbox.checked && symbolsCheckbox.checked) {
  password.textContent = generateNumbersAndSymbols(lengthh.value);
} else if (lettersCheckbox.checked && uppercaseCheckbox.checked) {
  password.textContent = generateLettersAndUppercase(lengthh.value);
} else if (numbersCheckbox.checked && uppercaseCheckbox.checked) {
  password.textContent = generateNumbersAndUppercase(lengthh.value);
} else if (symbolsCheckbox.checked && uppercaseCheckbox.checked) {
  password.textContent = generateUppercaseAndSymbols(lengthh.value);
} else if (lettersCheckbox.checked) {
  password.textContent = generateLetters(lengthh.value);
} else if (numbersCheckbox.checked) {
  password.textContent = generateNumbers(lengthh.value);
} else if (symbolsCheckbox.checked) {
  password.textContent = generateSymbols(lengthh.value);
} else if (uppercaseCheckbox.checked) {
  password.textContent = generateUppercase(lengthh.value);
} else {
  password.textContent = "";
}

  });

  // Llamada inicial con un valor predeterminado de 12
  password.textContent = generateLetters(12);
});

document.addEventListener("DOMContentLoaded", function() {
  var copyButton = document.getElementById("copy");
  var passwordText = document.getElementById("password");
  var message = document.getElementById("message");

  copyButton.addEventListener("click", function() {
    var tempInput = document.createElement("input");
    tempInput.value = passwordText.innerText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Mostrar el mensaje "Texto copiado"
    message.style.display = "block";
passwordText.style.display = "none"
    // Ocultar el mensaje después de 2 segundos
    setTimeout(function() {
      message.style.display = "none";
      passwordText.style.display = "block"
    }, 2000);
  });
});
