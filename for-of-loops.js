const awesomePerson = {
    name: 'Jowel',
    age: 28,
    hobbies: ['lacrosse', 'reading', 'cooking', 'sports'],
    isEngineer: true
};
console.log('key:', Object.keys(awesomePerson));
console.log('value:', Object.values(awesomePerson));
for (const [key,value] of  Object.entries(awesomePerson)){
        console.log(`${key}:${value}`);
        }






