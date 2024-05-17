// Task #1 
//Create an empty object and assign it to a variable.
//  let EmptyObj = {

//  }
//Create an object with properties for name, age, and profession.

// let obj = {
//     name:"Umar",
//     Age: 20,
//     Profession: "Software Engineer"
// }
// console.log(obj);


// Task 2: Object Properties
//Access and print the values of properties from an object.
// let obj2 = {
//     name:"umar",
//     lname:"Abid",
//     Age:20,
//     Profeesion:"Software Engineer"
// }
// console.log(Object.values(obj2));

//Modify the value of a property in an object.
// let obj2 = {
//     name:"umar",
//     lname:"Abid",
//     Age:20,
//     Profeesion:"Software Engineer"
// }
// obj2.name="Ali"
// obj2.lname="Ahmad"
// obj2.Age=27
// obj2.Profeesion="Medical"
// console.log(obj2);

// Add a new property to an existing object.
// let obj2 = {
//         name:"umar",
//         lname:"Abid",
//         Age:20,
//         Profeesion:"Software Engineer"
//     }

//     // first Method of change property
//     // obj2.class = obj2.name;
//     // delete obj2.name;
//     // first Method of change property
// obj2["class"] = obj2["name"]
//     delete obj2.name;
//     console.log(obj2);

// Task 3: Object Methods
// Create an object method that prints a message to the console.

// let obj2 = {
//     run:function() {
//                 console.log("Hello Everyone");
//             }
// }
// obj2.run()

// Create a method that calculates and returns a value based on object properties.  
// let obj2 = {
//     run:function() {
//                 return 20*30;
//             }
// }
// let sum = obj2.run()
// console.log(sum);

//Iterate over the properties of an object and print their values.
// let obj2 = {
//             name:"umar",
//             lname:"Abid",
//             Age:20,
//             Profeesion:"Software Engineer"
//         }

// for(const key in obj2){
//     console.log(obj2[key]);
// }

// Iterate over the properties of an object and perform a specific action for each property.
let obj2 = {
                name:"umar",
                lname:"Abid",
                Age:20,
                Profeesion:"Software Engineer"
            }
            for(const key in obj2){
                obj2.Age = obj2.name
            }