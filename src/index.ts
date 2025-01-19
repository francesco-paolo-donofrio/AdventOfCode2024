let age: number = 20;
if (age < 50) {
    age += 10;
};
 console.log(age);

let names: string[] = ["Max", "Manu"];
names.push("Manoj");
console.log(names);

let person: { name: string, age: number } = {
    name: "Max",
    age: 20
};
person.age = 30;
console.log(person);