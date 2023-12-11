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
    
	const searchInput = document.querySelector('input[type="text"]');

	searchInput.addEventListener('input', function () {
		const searchText = this.value.toLowerCase();

		Array.from(tableBody.rows).forEach(function (row) {
			row.style.display = row.textContent.toLowerCase().includes(searchText) ? '' : 'none';
		});
	});
});