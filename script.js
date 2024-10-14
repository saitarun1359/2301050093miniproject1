
const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    if (name === '' || email === '' || department === '') {
        alert('Please fill in all fields');
        return;
    }

    const employeeData = {
        name,
        email,
        department
    };

    localStorage.setItem('employeeData', JSON.stringify(employeeData));

    window.location.href = 'employee-list.html';
});

const employeeTable = document.getElementById('employee-table');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const storedEmployeeData = localStorage.getItem('employeeData');

if (storedEmployeeData) {
    const employeeData = JSON.parse(storedEmployeeData);

    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <td>${employeeData.name}</td>
        <td>${employeeData.email}</td>
        <td>${employeeData.department}</td>
    `;

    document.getElementById('employee-tbody').appendChild(tableRow);
}