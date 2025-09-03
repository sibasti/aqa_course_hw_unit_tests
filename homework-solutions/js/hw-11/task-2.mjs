class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary; 
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get profession() {
    return this._profession;
  }
  get salary() {
    return this.#salary;
  }

  set firstName(value) {
    if (/^[A-Za-z]{2,50}$/.test(value)) {
      this._firstName = value;
    } else {
      throw new Error("Имя должно содержать только латинские буквы (2-50 символов)");
    }
  }

  set lastName(value) {
    if (/^[A-Za-z]{2,50}$/.test(value)) {
      this._lastName = value;
    } else {
      throw new Error("Фамилия должна содержать только латинские буквы (2-50 символов)");
    }
  }

  set profession(value) {
    if (/^[A-Za-z ]+$/.test(value) && value.trim().length > 0) {
      this._profession = value;
    } else {
      throw new Error("Профессия должна содержать только латинские буквы и пробелы");
    }
  }

  set salary(value) {
    if (typeof value === "number" && value > 0 && value < 10000) {
      this.#salary = value;
    } else {
      throw new Error("Зарплата должна быть числом от 1 до 9999");
    }
  }

  getFullName() {
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

  get title() {
    return this._title;
  }
  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }

  set title(value) {
    this._title = value;
  }
  set phone(value) {
    this._phone = value;
  }
  set address(value) {
    this._address = value;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error("Можно добавить только экземпляр Employee");
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find(emp => emp.firstName === firstName);
    if (!employee) {
      throw new Error(`Сотрудник с именем ${firstName} не найден`);
    }
    return employee;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex(emp => emp.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error(`Сотрудник с именем ${firstName} не найден`);
    }
    this.#employees.splice(index, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, emp) => sum + emp.salary, 0);
  }

}

const emp1 = new Employee("John", "Doe", "Developer", 3000);
const emp2 = new Employee("Jane", "Smith", "Manager", 5000);
const emp3 = new Employee("Mark", "Brown", "Designer", 4000);

const company = new Company("Tech Corp", "123-456", "Main Street");
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary());
console.log(company.findEmployeeByName("Jane"));
company.removeEmployee("John");
console.log(company.getEmployees());

export { Employee, Company };
