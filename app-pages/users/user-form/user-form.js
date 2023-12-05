document.addEventListener('DOMContentLoaded', function () {
    function format(input, mask) {
        const value = input.value.replace(/\D/g, '');
        const formattedValue = value.replace(mask.regex, mask.replacement);
        input.value = formattedValue;
    }
  
    const masks = [
        { id: 'cpf', regex: /(\d{3})(\d{3})(\d{3})(\d{2})/, replacement: '$1.$2.$3-$4' },
        { id: 'phone', regex: /(\d{2})(\d)(\d{4})(\d{4})/, replacement: '($1) $2 $3-$4' }
    ];
  
    masks.forEach(function (mask) {
        const input = document.getElementById(mask.id);
        if (input) {
            input.addEventListener('input', function () {
                format(input, mask);
            });
        }
    });

    const form = document.getElementById('user-form');
    const outputContainer = document.getElementById('output-container');

    if (form && outputContainer) {
        form.addEventListener('submit', function (event) {
            handleFormSubmit(event);
        });
    }
});

function handleFormSubmit(event) {
    event.preventDefault();
    submitForm(event);
}

function clearForm() {
    const fields = document.querySelectorAll('input, select');
    fields.forEach(field => {
        field.value = '';
    });
}

function submitForm(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confPassword = document.getElementById('confPassword').value;

    if (password !== confPassword) {
        alert('as senhas não conferem');
        return;
    }

    const storedData = JSON.parse(localStorage.getItem('userDataList')) || [];

    const userData = {
        userName: document.getElementById('userName').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        password: password,
        confPassword: confPassword,
    };

    storedData.push(userData);
    
    localStorage.setItem('userDataList', JSON.stringify(storedData));
    console.log('User Data List:', formData);
    window.location.href = '../companies-list/companies-list.html';
}