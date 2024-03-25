document.getElementById('red').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});
document.getElementById('green').addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});
document.getElementById('blue').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});
document.getElementById('yellow').addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow';
});

function changeColor(color) {
    document.body.style.backgroundColor = color;
}
function changeBackgroundColor() {
    var colorSelect = document.getElementById("colorSelect");
    var selectedColor = colorSelect.options[colorSelect.selectedIndex].value;
    document.body.style.backgroundColor = selectedColor;
}
// Obtendo referência para o parágrafo e botão
const paragraph = document.getElementById("paragraph");
const toggleButton = document.getElementById("toggleButton");

// Adicionando um ouvinte de evento para o botão
toggleButton.addEventListener("click", function() {
    // Verificando se o parágrafo está visível
    if (paragraph.style.display === "none") {
        // Se estiver oculto, torna visível
        paragraph.style.display = "block";
        // Altera o texto do botão para "Ocultar"
        toggleButton.textContent = "Ocultar";
    } else {
        // Se estiver visível, torna oculto
        paragraph.style.display = "none";
        // Altera o texto do botão para "Mostrar"
        toggleButton.textContent = "Mostrar";
    }
});

function validateForm() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorMessage = document.getElementById("error-message");

    if (login === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        return false;
    } else if (password !== confirmPassword) {
        errorMessage.textContent = "As senhas não coincidem.";
        return false;
    } else if (password.length < 6 || password.length > 10) {
        errorMessage.textContent = "A senha deve ter entre 6 e 10 caracteres.";
        return false;
    }

    // Se todas as condições forem atendidas, o formulário pode ser submetido
    return true;
}
document.getElementById("checkButton").addEventListener("click", function() {
    var input = document.getElementById("palindromeInput").value.toLowerCase();
    var reversedInput = input.split('').reverse().join('');

    if (input === reversedInput) {
        document.getElementById("resultParagraph").textContent = "'" + input + "' é um palíndromo!";
    } else {
        document.getElementById("resultParagraph").textContent = "'" + input + "' não é um palíndromo!";
    }
});
function reverseNames() {
    var names = [];
    for (var i = 1; i <= 5; i++) {
        var nameInput = document.getElementById("name" + i).value;
        names.push(nameInput);
    }
    names.reverse();
    for (var i = 0; i < 5; i++) {
        document.getElementById("name" + (i + 1)).value = names[i];
    }
}
function toggleCampos() {
    var pessoaFisica = document.getElementById("pessoaFisica");
    var pessoaJuridica = document.getElementById("pessoaJuridica");
    var cpfLabel = document.getElementById("cpfLabel");
    var cpfInput = document.getElementById("cpf");
    var cnpjLabel = document.getElementById("cnpjLabel");
    var cnpjInput = document.getElementById("cnpj");
    var dataNascimentoLabel = document.getElementById("dataNascimentoLabel");
    var dataNascimentoInput = document.getElementById("dataNascimento");

    if (pessoaFisica.checked) {
        cpfLabel.style.display = "inline-block";
        cpfInput.disabled = false;
        cnpjLabel.style.display = "none";
        cnpjInput.disabled = true;
        dataNascimentoLabel.style.display = "inline-block";
        dataNascimentoInput.disabled = false;
    } else if (pessoaJuridica.checked) {
        cpfLabel.style.display = "none";
        cpfInput.disabled = true;
        cnpjLabel.style.display = "inline-block";
        cnpjInput.disabled = false;
        dataNascimentoLabel.style.display = "none";
        dataNascimentoInput.disabled = true;
    }
}

function formatarCPF() {
    var cpfInput = document.getElementById("cpf");
    var cpf = cpfInput.value.replace(/\D/g, '');
    if (cpf.length > 3 && cpf.length < 7) {
        cpfInput.value = cpf.substr(0, 3) + '.' + cpf.substr(3);
    } else if (cpf.length > 6 && cpf.length < 10) {
        cpfInput.value = cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(6);
    } else if (cpf.length > 9 && cpf.length < 12) {
        cpfInput.value = cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(6, 3) + '-' + cpf.substr(9);
    } else if (cpf.length >= 12) {
        cpfInput.value = cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(6, 3) + '-' + cpf.substr(9, 2);
    }
}

function formatarCNPJ() {
    var cnpjInput = document.getElementById("cnpj");
    var cnpj = cnpjInput.value.replace(/\D/g, '');
    if (cnpj.length > 2 && cnpj.length < 6) {
        cnpjInput.value = cnpj.substr(0, 2) + '.' + cnpj.substr(2);
    } else if (cnpj.length > 5 && cnpj.length < 9) {
        cnpjInput.value = cnpj.substr(0, 2) + '.' + cnpj.substr(2, 3) + '.' + cnpj.substr(5);
    } else if (cnpj.length > 8 && cnpj.length < 13) {
        cnpjInput.value = cnpj.substr(0, 2) + '.' + cnpj.substr(2, 3) + '.' + cnpj.substr(5, 3) + '/' + cnpj.substr(8);
    } else if (cnpj.length >= 13) {
        cnpjInput.value = cnpj.substr(0, 2) + '.' + cnpj.substr(2, 3) + '.' + cnpj.substr(5, 3) + '/' + cnpj.substr(8, 4) + '-' + cnpj.substr(12);
    }
}

function formatarDataNascimento() {
    var dataNascimentoInput = document.getElementById("dataNascimento");
    var data = dataNascimentoInput.value.replace(/\D/g, '');
    if
}


function intercalarPalavras() {
    var palavra1 = document.getElementById("palavra1").value;
    var palavra2 = document.getElementById("palavra2").value;
    var resultado = intercalar(palavra1, palavra2);
    document.getElementById("resultado").value = resultado;
}

function intercalar(palavra1, palavra2) {
    var intercalada = '';
    for (var i = 0; i < palavra1.length || i < palavra2.length; i++) {
        if (i < palavra1.length) {
            intercalada += palavra1[i];
        }
        if (i < palavra2.length) {
            intercalada += palavra2[i];
        }
    }
    return intercalada;
}

function calculateSum() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    var sum = num1 + num2 + num3;

    document.getElementById("result").textContent = "A soma dos números é: " + sum;
}

