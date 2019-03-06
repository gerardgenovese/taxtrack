// const person = {
// 	name: "Andrew",
// 	age: 26,
// 	location: {
// 		city: "Philly",
// 		temp: 92
// 	}
// }

// const { name: firstName = "Anonymous", age } = person;
// console.log( `${firstName} is ${age}.`);

// // const { city, temp } = person.location;
// // console.log(`It is ${temp} degree in ${city}.`)

// const { city, temp: temperature } = person.location;
// if (city && temperature){
//   console.log(`It is ${temperature} degrees in ${city}.`)
// }



// const book = {
// 	title: "Ego is the Enemy",
// 	author: "Ryan Holiday",
// 	publisher: {
// 		name: "Penguin"
// 	}
// };

// const { name:publisherName = "Self-Pulished" } = book.publisher;

// console.log(`${publisherName}`);


////////////ARRAY///////////////

// const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];

// const [ street, city, state = "New York", zip ] = address;
// console.log(street);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [ itemName, , mediumPrice ] = item;

console.log(`A ${itemName} cost ${mediumPrice}`)
