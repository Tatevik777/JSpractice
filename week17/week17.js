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