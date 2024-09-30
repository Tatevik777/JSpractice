 // Задание 1
//Создайте класс Worker. Класс должен содержать свойства name, surname. Создайте на его основе объект worker.
// Выведите в консоль созданный объект.
//class Worker {
  //constructor(name, surname) {
     // this.name = name;
      //this.surname = surname;
    ///}
 // }
// const worker = new Worker("Имя", "Фамилия");
// console.log(worker);

 //Задание 2
 //Добавьте в класс Worker метод fullName, который будет возвращать полное имя работника в формате "Фамилия, Имя".
 // Создайте объект worker на основе класса Worker и выведите его полное имя в консоль с помощью метода fullName
 //class Worker {
    //constructor(name, surname) {
     // this.name = name;
      //this.surname = surname;
   // }
    //fullName(){
       // return this.surname + ", " + this.name;
   //}
 // }
 // const worker2 = new Worker("Александр", "Петров");
  //console.log(worker2.fullName());

  //Задание 3
  //Создайте класс Car. Класс должен содержать свойства brand, model и year. 
  //Создайте на его основе объект car и выведите его свойства в консоль.
//class Car{
    //constructor(brand, model, year) {
       // this.brand=brand;
      //  this.model=model;
       // this.year=year;
        
   // }
//}
//const car1=new Car("ferrari","у2905","2024");
//console.log(car1);

//Задание 4
//Добавьте в класс Car метод getAge, который будет возвращать возраст машины (текущий год минус год выпуска,
//текущий год нужно получить через клас Date). Создайте объект car2 на основе класса Car
// и выведите его возраст в консоль с помощью метода getAge. Результат в консоли должен быть типом данных numbers.
//class Car {
  //constructor(brand, model, year) {
   // this.brand = brand;
   // this.model = model;
  //  this.year = year;
  //}
 // getAge() {
   // const nowYears = new Date().getFullYear();
   // return nowYears - this.year;
  //}
//}
//const car = new Car("BMW", "X6", 2023);
//console.log(car.getAge());

//Задание 5
//Cоздайте класс Rectangle. Класс должен содержать свойства width и height. Создайте на его основе 
//объект rectangle и выведите его свойства в консоль.
//class Rectangle{
//  constructor(width,height){
//    this.width=width;
//    this.height=height;
//  }
//}
//const rectangle1=new Rectangle("50" ,"25");
//console.log(rectangle1);

 // Задание 6
 // Добавьте в класс Rectangle метод getArea, который будет возвращать
 // площадь прямоугольника (произведение ширины и высоты).
 // Создайте объект rectangle на основе класса Rectangle и выведите
 // его площадь в консоль с помощью метода getArea.
 //class Rectangle {
  //constructor(width, height) {
    //this.width = width;
    //this.height = height;
  //}
 //getArea(){
  //return this.width*this.height;
 //}
//}
//const rectangle = new Rectangle("50" ,"25");
//console.log(rectangle.getArea());

//Задание 7
//Cоздайте класс Circle. Класс должен содержать свойство radius. 
//Создайте на его основе объект circle и выведите его свойство в консоль.

 //class Circle{
  //constructor(radius) {
   // this.radius = radius;
  //}
//}
//const circle = new Circle("500" );
//console.log(circle);

//Задание 8
//Добавьте в класс Circle метод calculateArea, который будет вычислять и 
//возвращать площадь круга. Формула для расчета площади круга: 
//площадь = радиус * радиус * 3.14. Создайте объект circle2 на основе класса Circle с 
//радиусом 3 и выведите его площадь круга в консоль с помощью метода calculateArea.

//class Circle{
  //constructor(radius) {
    //this.radius = radius;
  //}
 // calculateArea(){
    //return this.radius*this.radius*3.14;
  // }
//}
//const circle2 = new Circle(12);
//console.log(circle2.calculateArea());

//Задание 9
//Создайте класс Student. Класс должен содержать свойства name, age и grade. 
//Создайте на его основе объект student и выведите его свойства в консоль.

//class Student{
  //constructor(name, age, grade) {
    //this.age=age;
   // this.name=name;
  //  this.grade=grade;
    
 // }
//}
//const student =new Student("Тата","33","5");
//console.log(student);

//Задание 10
//Добавьте в класс Student метод increaseGrade, который будет увеличивать текущую оценку на 1. 
//Создайте объект student2 на основе класса Student, увеличьте его оценку с помощью метода increaseGrade
// и выведите новую оценку в консоль.
//class Student {
  //constructor(name, age, grade) {
    //this.name = name;
   // this.age = age;
   // this.grade = grade;
 // }
 // increaseGrade(){
  //  this.grade += 1;
  //}
//}
//const student = new Student("Cat", 29, 2);
//student.increaseGrade();
//console.log(student.grade);

//Задание 11
//Создайте класс Book. Класс должен содержать свойства title, author и year. 
//Создайте на его основе объект book и выведите его свойства в консоль.

//class Book{
  //constructor(title, author, year){
   // this.title = title;
   // this.author = author;
    //this.year = year; 

 // }
//}
//const book1=new Book("Последний из могикан", " Джеймс Фенимор Купер",1826);
//console.log(book1);


//Задание 12
//Добавьте в класс Book метод getTitleAndAuthor, который будет возвращать строку в формате
// "Название книги - Автор". Создайте объект book2 на основе класса Book и выведите его название 
//и автора в консоль с помощью метода getTitleAndAuthor.
//class Book {
  //constructor(title, author, year) {
   // this.title = title;
   // this.author = author;
    //this.year = year;
  //}
 // getTitleAndAuthor(){
    //return this.title +" - "+ this.author;
 // }
//}
//const book = new Book("Выразительный Javascript", "Марейн Хавербек", 2018);
//console.log(book.getTitleAndAuthor());

//Задание 13
//Создайте класс BankAccount. Класс должен содержать свойства accountNumber 
//и balance. Создайте на его основе объект account и выведите его свойства в консоль.
//class BankAccount{
//constructor(accountNumber, balance){
  //this.accountNumber=accountNumber;
  //this.balance=balance;
//}
//}
//const bankAccount1=new BankAccount(555, 5000000);
//console.log(bankAccount1);

//Задание 14
//Добавьте в класс BankAccount метод deposit, который будет увеличивать 
//баланс на заданную сумму. Создайте объект account на основе класса BankAccount,
// пополните его баланс с помощью метода deposit и выведите новый баланс в консоль.

//class BankAccount {
  //constructor(accountNumber, balance) {
    //this.accountNumber = accountNumber;
   // this.balance = balance;
 // }
 // deposit(sum) {
   // this.balance = sum + this.balance;
 // }
//}
//const account = new BankAccount(324234, 534554);
//account.deposit(200000);
//console.log(account.balance);

//Задание 15
//В класс BankAccount добавлен метод withdraw, который уменьшает баланс на заданную 
//сумму. Если запрошенная сумма превышает текущий баланс, выведите сообщение "Недостаточно средств". 
//Создайте объект account на основе класса BankAccount, попробуйте снять с него сумму, превышающую баланс,
// и выведите соответствующее сообщение в консоль.

//class BankAccount {
  //constructor(accountNumber, balance) {
    //this.accountNumber = accountNumber;
    //this.balance = balance;
  //}
 // deposit(sum) {
    //this.balance = sum + this.balance;
 // }
  //withdraw(amount) {
   // if (amount <= this.balance) {
     // this.balance = this.balance - amount;
    //} else {
     // console.log("Не достаточно средств");
    //}
 // }
//}
//const account = new BankAccount(324234, 534554);
//account.withdraw(555486);

//Задание 16
//Создайте класс Animal. Класс должен содержать свойства name и sound. Создайте на его основе объект animal 
//и выведите его свойства в консоль.
//class Animal{
 // constructor(name, sound){
   // this.name=name;
   // this.sound=sound;
 // }
//}
//const animal1=new Animal ("Кот Ученый", "Мур");
//console.log(animal1);

//Задание 17
//Добавьте в класс Animal метод makeSound, который будет выводить в консоль звук животного. 
//Создайте объект animal на основе класса Animal и вызовите метод makeSound.
//class Animal {
 // constructor(name, sound) {
   // this.name = name;
   // this.sound = sound;
  //}
  //makeSound() {
  //  console.log(this.sound);
 // }
//}
//const animal = new Animal("dog", "gav,gav");
//animal.makeSound()

//Задание 18
//Создайте класс Point. Класс должен содержать свойства x и y. 
//Создайте на его основе объект point и выведите его свойства в консоль.
//class Point{
 // constructor(x,y) {
    //this.x=x;
    //this.y=y;
  //}
//}
//const point=new Point(10,15);
//console.log(point);

//Задание 19
//В классе Point добавлен метод getDistance, который будет возвращать расстояние от точки до начала координат (0,0).
// Создайте объект point на основе класса Point и выведите его расстояние до начала координат с помощью метода getDistance.
//class Point {
  //constructor(x, y) {
   // this.x = x;
   // this.y = y;
 // }
  // Метод getDistance возвращает расстояние от точки до начала координат (0,0)
  //getDistance() {
   // return Math.sqrt(this.x ** 2 + this.y ** 2);
  //}
//}
//const point=new Point(4,20);
//console.log(point.getDistance());
//Задание 20
//Создайте класс Calculator. Класс должен содержать методы add, 
//subtract, multiply и divide, которые будут выполнять соответствующие математические 
//операции над двумя числами и возвращать результат. Создайте объект calc на основе класса
// Calculator и выполните следующее математическое выражение: (((2+2)-1)*4)\2 с помощью методов.
// Результат вывести в консоль.

//class Calculator {
  //add(num1, num2) {
   // return num1 + num2;
  //}
  //subtract(num1, num2) {
   // return num1 - num2;
  //}
  //multiply(num1, num2) {
   // return num1 * num2;
 // }
  //divide(num1, num2) {
    //return num1 / num2;
 // }
//}
//длинный вариант.
//const calc = new Calculator();
//const addResult = calc.add(2, 2);
//const subtractResult = calc.subtract(addResult, 1);
//const multiplyResult = calc.multiply(subtractResult, 4);
//const divideResult = calc.divide(multiplyResult, 2);
//console.log(divideResult);
///сокращенный вариант.
//console.log(calc.divide(calc.multiply(calc.subtract(calc.add(2, 2), 1), 4), 2));

//Задание 21
//Создайте класс Person. Класс должен содержать свойства name, age и city.
// Создайте на его основе объект person. Cоздайте переменную personInfo и в 
//нее поместите строчку, в которой будет вся информация из обьекта. 
//Должно получиться: 'Josh, 43, London' и выведите personInfo в консоль
//class Person{
  //constructor(name, age,city){
  //this.age=age;
  //this.name=name;
 // this.city=city;
 // }
//}
//const person = new Person("Josh", 43, "london");
//const personInfo = `${person.name},${person.age},${person.city}`;
//console.log(personInfo);

//Задание 22
//Добавьте в класс Person метод changeCity, который будет изменять 
//значение свойства city на новое значение. Создайте объект person на 
//основе класса Person, вызовите метод changeCity с аргументом "New York" 
//и выведите новое значение свойства city в консоль.
//class Person {
  //constructor(name, age, city) {
    //this.name = name;
    //this.age = age;
    //this.city = city;
  //}
 // changeCity(newCity){
   // this.city=newCity;
   // return this.city;

  //}
//}
//const person = new Person("Josh", 43, "london");
//console.log(person.changeCity("New York" ));

//Задание 23
//Создайте два класса EmployeeAmazon и EmployeeApple.

//- EmployeeAmazon, EmployeeApple должны содержать свойства name, position и salary, a EmployeeApple должен содержать 
//еще и метод calculateBonus, который будет увеличивать зарплату на процент, который ты ему передашь аргументом, 
//и менять ее в поле salary.

//- Создайте обьекты employeeAmazon и employeeApple и заполните их данными:
//Josh работает в компании Amazon менеджером, и его зарплата составляет 12 000$ в год.
//Frank работает в компании Apple разработчиком и его зарплата составляет 220 000$ в год.

//- В этом году Josh получит повышение на 15% процентов, а Frank получит повышение на 25%.

//- Используя метод calculateBonus из обьекта employeeApple, повысьте зарплаты этим сотрудникам,
// не создавая метод calculateBonus в классе EmployeeAmazon.

//- Для изменения зарплаты Josha используйте функцию bind.

//- После изменений зарплат, создайте переменную salaryInfo, в которой будет лежать строка 
//содержащая информацию о зарплатах вот в таком формате :
//Frank salary:указать зарплату Franka за год после повышения, Josh salary:указать зарплату Josha за год после повышения

//Выведите переменную salaryInfo в консоль.