$(document).ready(function () {
    const form = $('#user-form');
  
    if (form.length) {
        form.on('submit', function (event) {
            handleFormSubmit(event);
        });
    }
});
  
function handleFormSubmit(event) {
    event.preventDefault();
    submitForm(event);
}

function clearForm() {
    $('input, select').val('');
}

function submitForm(event) {
    event.preventDefault();

    const password = $('#password').val();
    const confPassword = $('#confPassword').val();

    if (password !== confPassword) {
    alert('As senhas não conferem');
    return;
    }

    const storedData = JSON.parse(localStorage.getItem('userDataList')) || [];

    const userData = {
    userName: $('#userName').val(),
    cpf: $('#cpf').val(),
    email: $('#email').val(),
    phone: $('#phone').val(),
    password: password,
    confPassword: confPassword,
    };

    storedData.push(userData);

    localStorage.setItem('userDataList', JSON.stringify(storedData));
    console.log('User Data List:', storedData);

    $('.success-message').text('Formulário enviado com sucesso!').fadeIn().delay(2000).fadeOut();
}