class Employee {
  #salary;
    constructor(firstName, lastName, profession, salary){
      this.firstName = firstName;
      this.lastName = lastName;
      this. profession = profession;
      this.#salary = salary;
    }
    get firstName(){
      return this._firstName;
    }
    get lastName(){
      return this._lastName;
    }
    get profession(){
      return this._profession;
    }
    get salary(){
      return this.#salary;
    }

    set firstName(value){
      this._firstName = value;
    }
    set lastName(value){
      this._lastName = value;
    }
    set profession(value){
      this._profession = value;
    }
    set salary(value){
      if(value > 0){
        this.#salary = value;
      } else {
        throw new Error("Зарплата должна быть положительным числом");
      }
    }

    getFullName(){
      return `${this.firstName} ${this.lastName}`;
    }
}

class Company {
  #employees = [];

  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
  }

  // Геттеры
  get title() {
    return this._title;
  }
  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }

  // Сеттеры
  set title(value) {
    this._title = value;
  }
  set phone(value) {
    this._phone = value;
  }
  set address(value) {
    this._address = value;
  }

  // Методы
  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('Можно добавить только экземпляр Employee');
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);

console.log(emp1.firstName);
emp1.salary = 3100;
console.log(emp1.salary);
console.log(emp1.getFullName());

const company = new Company('Tech Corp', 123456, 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);

console.log(company.getEmployees());
console.log(company.getInfo());


export { Employee, Company };
