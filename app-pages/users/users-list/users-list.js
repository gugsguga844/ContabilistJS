document.addEventListener('DOMContentLoaded', function () {

    const storedData = JSON.parse(localStorage.getItem('userDataList')) || [];
    
    const tableBody = document.getElementById('users-list-body');
    
    storedData.forEach(function (userData) {
        const row = document.createElement('tr');
    
        row.innerHTML = `
            <td>${userData.userName}</td>
            <td>${userData.cpf}</td>
            <td class="d-none d-md-table-cell">${userData.email}</td>
            <td class="d-none d-md-table-cell">${userData.phone}</td>
        `;
        tableBody.appendChild(row);
    });
    
    });