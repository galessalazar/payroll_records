// Get a reference to the #add-employees-btn element
// const addEmployeesBtn = document.querySelector('#add-employees-btn');
// addEmployeesBtn.addEventListener("click", () => {
//    alert("button clicked"); 
// }
// );


// Collect employee data

 const collectEmployees = function() {
    const employee = {
        firstName: 'Bill', 
        lastName: 'Evans', 
        salary: 45000 , 
        firstName: 'Sally',
        lastName: 'Smith' ,
        salary: 15000 , 
        firstName: 'Jon',
        lastName: 'Swan',
        salary: 35000,
    }
 }
    console.log(collectEmployees)
    let i = 1;
    while (i <= 3) {
        console.log(i);
        i++;
    }
  // TODO: Get user input to create and return an array of employee objects
// const collectEmployees = document.querySelector('collect-employees');
// const nameInput = document.querySelector('firstName');
// const lastnameInput = document.querySelector('last-name');
// const salaryInput = document.querySelector('salary');
// const btn = document.querySelector('continue-cancel');
const button = document.add-btn('btn');
button.addEventListener('click', function(){
    alert('button clicked');
})
firstName = prompt(`Please enter your name`);
lastName = prompt(`Please enter your last name`);
salary1 = prompt(`Please enter your salary`);
btnprompt = prompt(`Do you want to add another employee?`);


function myfunction() {
    confirm('Press a button');
}


// Display the average salary


function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }


const sum = numbers.reduce((total, num) => total + num, 0);
const average = sum / numbers.length;

return average;
}

const numbers = [45000 , 35000 , 15000];
const average = calculateAverage(numbers);
console.log(average); 

//  const arr = [35000,15000, 45000];
//  var sum = 0;
//  for (var sum 45000, 15000 , 35000) ,  {
// //     sum += number;
// }


// let arr = [45000, 35000 , 15000];
// let salary = arr(arr).average();
// console.log('Average employee salary')
//  const displayAverageSalary = function(employeesArray) {
//  const averageSalary = arr('collect.js');
 
    // TODO: Calculate and display the average salary


// Select a random employee
const getRandomEmployee = function(employeesArray) {
    const randomIndex = Math.floor(Math.random() * getRandomEmployee.length);
console.log(randomIndex);
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
