// Get a reference to the #add-employees-btn element
// const addEmployeesBtn = document.querySelector('#add-employees-btn');
// addEmployeesBtn.addEventListener("click", () => {
//    alert("button clicked"); 
// }
// );


// Collect employee data


 const collectEmployees = function() {
  let wantMoreEmployees = true
  console.log('hello')
 let employeesArray = JSON.parse(localStorage.getItem('employeesArray')) || []  
 while(wantMoreEmployees === true) {
  let   firstName = prompt('Please enter your name')
  let lastName = prompt('Please enter your last name')
  let salary1 = parseInt(prompt('Please enter your salary'))
   
   const employee = {
         firstName: firstName,
        lastName: lastName,
        salary: salary1,
        
      }
  employeesArray.push(employee)
  localStorage.setItem('employeesArray', JSON.stringify(employeesArray))
    wantMoreEmployees = confirm('Do you want to add another employee?');
   if(!wantMoreEmployees ){
    break
   }
 }
  


   return employeesArray  

    
 }
    
    
  // TODO: Get user input to create and return an array of employee objects
// const collectEmployees = document.querySelector('collect-employees');
// const nameInput = document.querySelector('firstName');
// const lastnameInput = document.querySelector('last-name');
// const salaryInput = document.querySelector('salary');
// const btn = document.querySelector('continue-cancel');
const addEmployeesBtn = document.querySelector('.btn');



 


   



// Display the average salary


// function calculateAverage(numbers) {
   

// const numbers = [45000 , 35000 , 15000];
// const average = calculateAverage(numbers);
// console.log(average); 

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
    const displayAverageSalary = function(employeesArray){
      let totalSalary =[]
      employeesArray.forEach((employee) => {
     let employeeSalary = employee.salary
     totalSalary.push(employeeSalary)   
     let average = totalSalary.reduce((a, b) => {
      return a + b;
     },0)
     return average
      })
    }
// console.log(employeeData,'employeeArray')
// let employeeTotal = 0
// if (employeeData.length === 0) {
//   return 0;
// }
// for(const employee of employeeData) {
//   const individualSalary = parseInt ( employee.salary)
//     employeeTotal += individualSalary
//    console.log(employeeTotal)
// }
// const average = employeeTotal / employeeData.length
// console.log(average)
// for(let i = 0; i < employeeData.length; i++){
//   console.log(employeeData[i].salary)
//   const sum = employeeData[i].salary.reduce((total, num) => {return total + num },0);
//   console.log(sum, 'reduceMethod') 
//   const average = sum / employeeData.length;
// }

// console.log(average)
// console.log(`averageSalary for ${employeeData.salary} is ${average}`)
    


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  console.log(employeesArray)
    const randomIndex = Math.floor(Math.random() * employeesArray.length)
    const random = employeesArray[randomIndex]
    const randomString = `${random.firstName} , ${random.lastName}`
    console.log(`random employee: ${randomString}`)

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
 addEmployeesBtn.addEventListener('click', trackEmployeeData)
