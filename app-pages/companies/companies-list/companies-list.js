document.addEventListener('DOMContentLoaded', function () {

const storedData = JSON.parse(localStorage.getItem('formDataList')) || [];

const tableBody = document.getElementById('companies-list-body');

storedData.forEach(function (formData) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${formData.businessName}<br>${formData.name}</td>
        <td>${formData.cnpj}<br>${formData.phone}</td>
        <td>${formData.city}<br>${formData.state}</td>
        <td>${formData.status}</td>
    `;
    tableBody.appendChild(row);
});

});