const employees = [];

function Employee(name, title, salary, status = "Full Time"){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;

    this.printEmployeeForm = function(){
        console.log(`Name: ${name}, Title: ${title}, Salary: $${salary}, Status: ${status}`)
    }

}

let newEmployee = new Employee("John Smith", "CTO", 54000, "Part Time")

newEmployee.printEmployeeForm();

employees.push(newEmployee);

let newEmployeeOne = new Employee("Elon Musk", "CEO, Iron Man", 49920)

newEmployeeOne.printEmployeeForm();

employees.push(newEmployeeOne);

let newEmployeeTwo = new Employee("Bill Gates", "Contractor", 100000, "Contractor")

newEmployeeTwo.printEmployeeForm();

employees.push(newEmployeeTwo);

console.log(employees)