document.addEventListener('DOMContentLoaded', function () {
    function format(input, mask) {
        const value = input.value.replace(/\D/g, '');
        const formattedValue = value.replace(mask.regex, mask.replacement);
        input.value = formattedValue;
    }
  
    const masks = [
        { id: 'cnpj', regex: /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, replacement: '$1.$2.$3/$4-$5' },
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

    const form = document.getElementById('company-form');
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

    const storedData = JSON.parse(localStorage.getItem('formDataList')) || [];

    const formData = {
        businessName: document.getElementById('businessName').value,
        status: document.getElementById('status').value === 'true' ? 'Ativa' : 'Inativa',
        name: document.getElementById('name').value,
        cnpj: document.getElementById('cnpj').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        cep: document.getElementById('cep').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
    };

    storedData.push(formData);
    
    localStorage.setItem('formDataList', JSON.stringify(storedData));
    console.log('Form Data List:', formData);
    window.location.href = '../companies-list/companies-list.html';
}