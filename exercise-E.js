// Here is example using the String interpolation to concat strings
const greetingStart = "Hello";
const my = "my name is"
const name = "Juliana";

const greeting = `${greetingStart}, ${my}, ${name}`;

//what is the $ symbol? to interpolate something, which means to add inside the strig the value of a variable you must add a '${}. if it's a static string use "" if it changes use ``. 

console.log(greeting); // Logs "Hello, my name is Daniel"