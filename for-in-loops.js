// Problem 1
const person = { name: 'John', age: 30, city: 'New York' };
for (const  element in person){
    console.log(`${element} : ${person[element]}`);
}


// Problem 2
const numbers = { a: 10, b: 20, c: 30 };
 let sum = 0;
for(const element in numbers){
    sum += numbers[element];
    //console.log(numbers[element] += numbers[element]);
    
} console.log(sum)



// Problem 3
const originalObj = { a: 1, b: 2, c: 3 };
for(const element in originalObj){
     originalObj[element] = originalObj[element] * 2;
    //console.log(numbers[element] += numbers[element]);
    
} console.log(originalObj)
