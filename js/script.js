// const numbers = [5, 8, 10, 23, 48, 60];

// for (const number of numbers) {
// 	console.log(number / 5);
// }

// console.log("-----");

// for (const number of numbers) {
// 	if (number % 2 === 0) {
// 		console.log(`%cLiczba ${number} jest parzysta`, 'background-color: gold; color: black');
// 	} else {
// 		console.log(`%cLiczba ${number} jest nieparzysta`, 'background-color: tomato; color: black');
// 	}
// }

const cars = ['bmw', 'opel', 'mazda', 'audi']

console.log(cars);

cars.unshift('Fiat')
console.log(cars);
cars.shift()
console.log(cars);
cars.push('Porshe')
console.log(cars);
cars.pop()
console.log(cars);
cars.reverse();
console.log(cars);