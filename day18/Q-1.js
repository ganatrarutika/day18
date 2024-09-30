class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name, age, salary, department) {
        super(name, age, salary);
        this.department = department;
    }

    getManagerDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, Department: ${this.department}`;
    }
}

const employee = new Employee("John Doe", 30, 50000);
console.log(employee.getDetails());

const manager = new Manager("Jane Smith", 40, 80000, "Sales");
console.log(manager.getManagerDetails());


    

