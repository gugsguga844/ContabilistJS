/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
$(document).ready(function () {
	const form = $('#company-form');

	if (form) {
		form.addEventListener('submit', function (event) {
			handleFormSubmit(event);
		});
	}
});

function limpa_formulário_cep() {
	document.getElementById('state').value=('');
	document.getElementById('city').value=('');
}

function meu_callback(conteudo) {
	if (!('erro' in conteudo)) {
		document.getElementById('state').value=(conteudo.uf);
		document.getElementById('city').value=(conteudo.localidade);
	}
	else {
		limpa_formulário_cep();
		alert('CEP não encontrado.');
	}
}

// eslint-disable-next-line no-unused-vars
function pesquisacep(valor) {

	var cep = valor.replace(/\D/g, '');

	if (cep != '') {

		var validacep = /^[0-9]{8}$/;

		if(validacep.test(cep)) {

			document.getElementById('state').value='...';
			document.getElementById('city').value='...';

			var script = document.createElement('script');

			script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

			document.body.appendChild(script);

		}
		else {
			limpa_formulário_cep();
			alert('Formato de CEP inválido.');
		}
	} 
	else {
		limpa_formulário_cep();
	}
}

function handleFormSubmit(event) {
	event.preventDefault();
	submitForm(event);
}

function clearForm() {
	$('input, select').val('');
}

function submitForm(event) {
	event.preventDefault();

	const storedData = JSON.parse(localStorage.getItem('formDataList')) || [];

	const formData = {
		businessName: $('#businessName').val(),
		status: $('#status').val() === 'true' ? 'Ativa' : 'Inativa',
		name: $('#name').val(),
		cnpj: $('#cnpj').val(),
		email: $('#email').val(),
		phone: $('#phone').val(),
		cep: $('#cep').val(),
		city: $('#city').val(),
		state: $('#state').val(),
	};

	storedData.push(formData);
    
	localStorage.setItem('formDataList', JSON.stringify(storedData));
	console.log('Form Data List:', formData);

	$('.success-message').text('Formulário enviado com sucesso!').fadeIn().delay(2000).fadeOut();
}