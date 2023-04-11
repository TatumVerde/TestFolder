class Employee {
    constructor(name, phoneNumber, email, salary) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.salary = salary;
    }

    raiseSalary(x) {
        this.salary += x
    }

    lowerSalary(x) {
        this.salary += x
    }

    getEmployeeInfo() {
        return `імя: ${this.name}, 
            номер телефону: ${this.phoneNumber},
            електронна адреса: ${this.email},
            заробітна плата: ${this.salary}`
    }

}

class Manager extends Employee {
    constructor(name, phoneNumber, email, salary) {
        super(name, phoneNumber, email, salary);
        this.bonus = 0
        this.subordinates = []
    }

    setBonus(x) {
        this.bonus = x

    }

    addSub(empl) {
        this.subordinates.push(empl)
        
    }

    getManagerInfo() {
        let totalSalary = this.salary + this.bonus;
        let subordinateNames = "";
        for (let i = 0; i < this.subordinates.length; i++) {
            subordinateNames += this.subordinates[i].name + ", ";
        }
        return `зарплата з бонусом: ${totalSalary},
        підлеглі: ${subordinateNames}`;
    }
}


const employees = [
    new Employee('Таня', +380667863391, 'taniaFdrts@mail.com', 190),
    new Employee('Владік', +380098339221, 'vladichkaFdrts@mail.com', 10),
    new Employee('Мама', +38098435267, 'iAmMamka@mail.com', 120),
    new Employee('Коля', +380667863391, 'papaUte@mail.com', 120),
    new Employee('Ростік', +380847362099, 'bbbghry55@mail.com', 600),
    new Employee('Багіра', +380667566431, 'bagiraaaa@mail.com', 900),
    new Employee('Толік', +380994367321, 'meeeeeeow@mail.com',300),
    new Employee('Марго', +380698789899, 'margosha@mail.com', 1),
    new Employee('Прося', +380999000988, 'sexyBich@mail.com', 30),
    new Employee('Ковід', +380000023433, 'covid2019@mail.com', 900)
]

let a = prompt('Введіть букву');
const selectedEmp = employees.filter(emp => emp.name.charAt(0) === a);
selectedEmp.forEach(emp => alert(emp.getEmployeeInfo()))

if (selectedEmp.length == 0) {
    alert("Немає таких людей")
}


const manager1 = new Manager('Іван', +380996567321, 'meemasaa@mail.com', 500)
const manager2 = new Manager('Джек', +380994363321, 'fafadda@mail.com', 900)

manager1.addSub(employees[1])
manager1.addSub(employees[6])
manager1.addSub(employees[5])

manager2.addSub(employees[0])
manager2.addSub(employees[3])
manager2.addSub(employees[8])

manager1.setBonus(3000)
manager2.setBonus(2000)


let nameOfManager = prompt('Введіть імя менеджера');
if(manager1.name == nameOfManager) {
    alert(manager1.getManagerInfo())
} else if(manager2.name == nameOfManager) {
    alert(manager2.getManagerInfo())
}