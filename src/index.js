// 1. Obyektlar
var person = {
    name: "John Doe",
    age: 25,
    isStudent: false,
};
console.log("Person:", person);

var book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
};
console.log("Book:", book);

// 2. Massivlar
var numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

function sumArray(arr) {
    return arr.reduce(function (sum, num) { return sum + num; }, 0);
}
console.log("Sum of Numbers:", sumArray(numbers));

var fruits = ["apple", "banana", "cherry"];
console.log("Fruits:", fruits);

function capitalizeArray(arr) {
    return arr.map(function (fruit) { return fruit.toUpperCase(); });
}
console.log("Capitalized Fruits:", capitalizeArray(fruits));

// 3. Tuple
var studentRecord = ["Alice", 22, true];
console.log("Student Record:", studentRecord);

var coordinate = [10, 20];
console.log("Coordinate:", coordinate);

// 4. any
var variable;
variable = "Hello";
console.log("Variable (string):", variable);
variable = 42;
console.log("Variable (number):", variable);
variable = true;
console.log("Variable (boolean):", variable);

var anyArray = ["text", 42, false];
console.log("Any Array:", anyArray);

function printArray(arr) {
    arr.forEach(function (item) { return console.log(item); });
}
console.log("Printing Any Array:");
printArray(anyArray);

// 5. unknown
var unknownVariable;
unknownVariable = "Hello";
console.log("Unknown Variable (string):", unknownVariable);
unknownVariable = 42;
console.log("Unknown Variable (number):", unknownVariable);
unknownVariable = false;
console.log("Unknown Variable (boolean):", unknownVariable);

function checkAndConvert(value) {
    if (typeof value === "string") {
        return value;
    }
    return "Not a string";
}
console.log("Check and Convert:", checkAndConvert(unknownVariable));

// 6. never
function throwError(message) {
    throw new Error(message);
}
// Commented out to prevent app from breaking.
// throwError("This is an error!");

function infiniteLoop() {
    // Uncomment to cause infinite loop
    // while (true) {}
}

// 7. Funksiyalar
function addNumbers(a, b) {
    return a + b;
}
console.log("Add Numbers:", addNumbers(5, 10));

function formatDate(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
console.log("Formatted Date:", formatDate(new Date()));

// 8. Enum
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
console.log("Days of the Week Enum:", DaysOfWeek);

function printDay(day) {
    console.log("Day of the Week:", DaysOfWeek[day]);
}
printDay(DaysOfWeek.Friday);

// 9. Intersection (Worker)
var worker = {
    name: "Jane Doe",
    age: 30,
    employeeId: 12345,
    department: "HR",
};
console.log("Worker:", worker);

// 10. Vehicle and Car (Inheritance)
var car = {
    make: "Tesla",
    model: "Model S",
    year: 2024,
    numberOfDoors: 4,
    isElectric: true,
};
console.log("Car:", car);

// 11. Type Alias (PersonWithAddress)
var personWithAddress = {
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

// 12. getStudentSummary Function
function getStudentSummary(student) {
    var averageGrade = student.grades.reduce(function (a, b) { return a + b; }, 0) / student.grades.length;
    return `Name: ${student.name}, Age: ${student.age}, Average Grade: ${averageGrade}`;
}
var student = {
    name: "Bob",
    age: 21,
    grades: [85, 90, 78],
    address: ["Elm St", 123],
};
console.log("Student Summary:", getStudentSummary(student));

// 13. Enum, Type Alias va Intersection
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
console.log("Order Status Enum:", OrderStatus);

var customerOrder = {
    orderId: 456,
    status: OrderStatus.Shipped,
    totalAmount: 150.0,
    customerId: 789,
    name: "Sarah",
};
console.log("Customer Order:", customerOrder);
