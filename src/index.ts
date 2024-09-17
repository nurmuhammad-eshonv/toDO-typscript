// 1. Interfeys va Obyektlar
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
  }
  
  const person: Person = {
    name: "John Doe",
    age: 25,
    isStudent: false,
  };
  
  console.log("Person:", person);
  
  interface Book {
    title: string;
    author: string;
    publishedYear: number;
  }
  
  const book: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  };
  
  console.log("Book:", book);
  
  // 2. Massivlar
  const numbers: number[] = [1, 2, 3, 4, 5];
  
  function sumArray(arr: number[]): number {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  console.log("Sum of numbers array:", sumArray(numbers));
  
  const fruits: string[] = ["apple", "banana", "cherry"];
  
  function capitalizeArray(arr: string[]): string[] {
    return arr.map(fruit => fruit.toUpperCase());
  }
  
  console.log("Capitalized fruits:", capitalizeArray(fruits));
  
  // 3. Tuple
  const studentRecord: [string, number, boolean] = ["Alice", 22, true];
  const coordinate: [number, number] = [10, 20];
  
  console.log("Student Record:", studentRecord);
  console.log("Coordinate:", coordinate);
  
  // 4. any
  let variable: any;
  variable = "Hello";
  variable = 42;
  variable = true;
  
  const anyArray: any[] = ["text", 42, false];
  
  console.log("Any array:", anyArray);
  
  function printArray(arr: any[]): void {
    arr.forEach(item => console.log(item));
  }
  
  console.log("Print anyArray:");
  printArray(anyArray);
  
  // 5. unknown
  let unknownVariable: unknown;
  unknownVariable = "Hello";
  unknownVariable = 42;
  unknownVariable = false;
  
  function checkAndConvert(value: unknown): string {
    if (typeof value === "string") {
      return value;
    }
    return "Not a string";
  }
  
  console.log("Check and Convert (unknownVariable):", checkAndConvert(unknownVariable));
  
  // 6. never
  function throwError(message: string): never {
    throw new Error(message);
  }
  
  function infiniteLoop(): never {
    while (true) {}
  }
  
  // Uncomment to test (will crash execution)
  // throwError("This is an error!");
  
  // 7. Funksiyalar
  function addNumbers(a: number, b: number): number {
    return a + b;
  }
  
  console.log("Sum of 2 and 3:", addNumbers(2, 3));
  
  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  console.log("Formatted Date:", formatDate(new Date()));
  
  // 8. Enum
  enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  
  function printDay(day: DaysOfWeek): void {
    console.log("Day of the week:", DaysOfWeek[day]);
  }
  
  printDay(DaysOfWeek.Tuesday);
  
  // 9. Intersection Tiplari
  interface PersonInterface {
    name: string;
    age: number;
  }
  
  interface Employee {
    employeeId: number;
    department: string;
  }
  
  // Renamed 'Worker' to 'EmployeeWorker'
  type EmployeeWorker = PersonInterface & Employee;
  
  const employeeWorker: EmployeeWorker = {
    name: "Jane Doe",
    age: 30,
    employeeId: 12345,
    department: "HR",
  };
  
  console.log("EmployeeWorker:", employeeWorker);
  
  // 10. Interfeyslar
  interface Vehicle {
    make: string;
    model: string;
    year: number;
  }
  
  interface Car extends Vehicle {
    numberOfDoors: number;
    isElectric: boolean;
  }
  
  const car: Car = {
    make: "Tesla",
    model: "Model S",
    year: 2024,
    numberOfDoors: 4,
    isElectric: true,
  };
  
  console.log("Car:", car);
  
  // 11. Type Alias
  type Address = {
    street: string;
    city: string;
    postalCode: string;
  };
  
  type PersonWithAddress = Person & { address: Address };
  
  const personWithAddress: PersonWithAddress = {
    name: "Mark",
    age: 28,
    isStudent: true,
    address: {
      street: "Main St",
      city: "Springfield",
      postalCode: "12345",
    },
  };
  
  console.log("Person with Address:", personWithAddress);
  
  // 12. Aralash Mashqlar
  interface Student {
    name: string;
    age: number;
    grades: number[];
    address: [string, number];
  }
  
  function getStudentSummary(student: Student): string {
    const averageGrade = student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
    return `Name: ${student.name}, Age: ${student.age}, Average Grade: ${averageGrade}`;
  }
  
  const student: Student = {
    name: "Bob",
    age: 21,
    grades: [85, 90, 78],
    address: ["Elm St", 123],
  };
  
  console.log("Student Summary:", getStudentSummary(student));
  
  // 13. Enum, Type Alias va Intersection
  enum OrderStatus {
    Pending,
    Shipped,
    Delivered,
    Cancelled,
  }
  
  interface Order {
    orderId: number;
    status: OrderStatus;
    totalAmount: number;
  }
  
  interface Customer {
    customerId: number;
    name: string;
  }
  
  type CustomerOrder = Order & Customer;
  
  const customerOrder: CustomerOrder = {
    orderId: 456,
    status: OrderStatus.Shipped,
    totalAmount: 150.0,
    customerId: 789,
    name: "Sarah",
  };
  
  console.log("Customer Order:", customerOrder);
  