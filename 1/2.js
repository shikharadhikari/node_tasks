let temperatures = [32,45,50,84,90,78,68];
let celsius = temperatures.map((temp) => {
  return (temp - 32) * (5/9);
});
console.log(celsius);
celsius.sort((a,b) => a - b);
console.log(celsius);
let lowestTemperatures = celsius.slice(0, 3);
console.log(lowestTemperatures);