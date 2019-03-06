// import * as firebase from "firebase";


// //once = fetch data on specific reference a single time
// //on off = set up and cancel supscriptions


// var config = {
// 	apiKey: "AIzaSyAiOe6dJ7xB_qr-niv6jgSGCKY6OQ_cm0I",
// 	authDomain: "expensify-7e5fd.firebaseapp.com",
// 	databaseURL: "https://expensify-7e5fd.firebaseio.com",
// 	projectId: "expensify-7e5fd",
// 	storageBucket: "expensify-7e5fd.appspot.com",
// 	messagingSenderId: "1018757737459"
// };
// firebase.initializeApp(config);

// const database = firebase.database();




// //read data
// // database.ref("expenses").once("value")
// // 	// .then((snapshot) => console.log(snapshot.val()));
// // 	.then((snapshot => {
// // 		const expenses = [];

// // 		snapshot.forEach(childSnapshot => {
// // 			expenses.push({
// // 				id: childSnapshot.key,
// // 				...childSnapshot.val()
// // 			});
// // 		});
// // 		console.log(expenses);
// // 	}));


// //child_removed ..fires when an expense gets deleted
// database.ref("expenses").on("child_removed", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// //child_changed ..fired when something is changed
// database.ref("expenses").on("child_changed", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// //child_added ..fires one time for all data. reruns for all new expenses
// database.ref("expenses").on("child_added", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// });

// 	//get db reference and set up subscription and watch for changes.
// 	//on does not support promises
// 	// database.ref("expenses").on("value", (snapshot) => {
// 	// 	const expenses = [];
// 	// 	snapshot.forEach(childSnapshot => {
// 	// 		expenses.push({
// 	// 			id: childSnapshot.key,
// 	// 			...childSnapshot.val()
// 	// 		});
// 	// 	});
// 	// 	console.log(expenses);

// 	// });




// //set up expenses
// // database.ref("expenses").push({
// // 	description: "Rent",
// // 	note: "",
// // 	amount: 109500,
// // 	createdAt: 656464
// // });







// // database.ref("notes/-LZvUBp7GFlnuqtVTXw6").remove();



// //push to firebase
// // database.ref("notes").push({
// // 	title: "Course topics",
// // 	body: "react, angular"
// // });

// // const notes = [
// // 	{
// // 		id: "12",
// // 		title: "First Note",
// // 		body: "This is my note"
// // 	},
// // 	{
// // 		id: "761ase",
// // 		title: "Another Note",
// // 		body: "This is my note"
// // 	}
// // ];





// // const onValueChange = (snapshot) => {
// // 	console.log(snapshot.val());
// // };

// //let server notify us when data changes
// // const onValueChange = database.ref().on("value", (snapshot) => {
// // 	console.log(snapshot.val());
// // }, (err) => {
// // 	console.log("Error with data fetching", err)
// // });

// // setTimeout(() => {
// // 	database.ref("age").set("32");
// // },3500);

// // //unsubscribe
// // setTimeout(() => {
// // 	database.ref().off(onValueChange);
// // },6500);

// // setTimeout(() => {
// // 	database.ref("age").set("34");
// // },9500);



// //get db info and console.log string with info
// // database.ref().on("value", (snapshot) => {
// // 	const val = snapshot.val();
// // 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// // });


// 	// const dbChange = database.ref().on("value", (snapshot) => {
// 	// 	console.log(snapshot.val());
// 	// });
	
// 	// setTimeout(() => {
// 	// 	database.ref("name").set("Mike"), () => {database.ref().off(dbChange)};
// 	// },1000);






// ////fetch db data
// // database.ref().once("value")
// // 	.then((snapshot) => {
// // 		const val = snapshot.val();
// // 		console.log(val);
// // 	})
// // 	.catch((err) => {
// // 		console.log("Error", err)
// // 	})

// // database.ref().set({
// // 	name: "John",
// // 	age: 30,
// // 	stressLevel: 6,
// // 	job: {
// // 		title: "Software Developer",
// // 		company: "google"
// // 	},
// // 	isSingle: true,
// // 	location: {
// // 		city: "nyc",
// // 		country: "usa"
// // 	}
// // }).then(() => {
// // 	console.log("data is saved");
// // }).catch((err) => {
// // 	console.log("error:", err);
// // });


// // database.ref().update({
// // 	stressLevel: 9,
// // 	"job/company": "amazon",
// // 	"location/city": "seattle"
// // });

// // database.ref().set("This is my data.");

// // database.ref("age").set(27);
// // database.ref("location/city").set("New York");

// // database.ref("attributes").set({
// // 	height: 73,
// // 	weight: 200
// // }).then(() => {
// // 	console.log("data 2 is saved");
// // }).catch((err) => {
// // 	console.log("error2:", err);
// // });


// // database.ref("isSingle").remove()
// // 	.then(() => {
// // 		console.log("Remove succeeded");
// // 	}).catch((err) => {
// // 		console.log("Remove Failed: ", err);
// // 	});

// //equivalent as calling .remove just set null
// // database.ref("isSingle").set(null);

// //update called with object
// //update will only update the root
// //need to use quotes and / to get children of root without erasing the rest of the children IE country
// // database.ref().update({
// // 	name: "Jane",
// // 	age: 34,
// // 	job: "Software Engineer",
// // 	isSingle: null,
// // 	"location/city": "boston"
// // });



// //how to fetch the data,
// //once: firt argument is event type & returns promise
// //add root in ref to get just that root IE location or job

// // database.ref().once("value")
// // 	.then((snapshot) => {
// // 		const val = snapshot.val()
// // 		console.log(val);
// // 	})
// // 	.catch((err) => {
// // 		console.log("Error: ", err)
// // 	});

// //subscribe and get notified of all data changes with on

// // const onValueChange = database.ref().on("value", (snapshot) => {
// // 	console.log(snapshot.val());
// // }, (err) => {
// // 	console.log("error:", err)
// // });

// // setTimeout(() => {
// // 	database.ref("age").set(28);
// // }, 2000);
// // setTimeout(() => {
// // 	//unsubscribe with off
// // 	database.ref().off("value", onValueChange);
// // }, 3000);
// // setTimeout(() => {
// // 	database.ref("age").set(31);
// // }, 4000);


// // const getInfo = database.ref().on("value", (snapshot) => {
// // 	const val = snapshot.val();
// // 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// // }, (err) => {
// // 	console.log("error:", err);
// // });

// // setTimeout(() => {
// // 	database.ref().update({
// // 		"job/company": "amazon",
// // 		"job/title": "Software Developer"
// // 	});
// // }, 1000);





//////////////////////////////////////////////////////////////////////////////////////
/////////////////////----PROJECT WORK-----///////////////////////////////////////////

import * as firebase from "firebase";

var config = {
	// apiKey: "AIzaSyAiOe6dJ7xB_qr-niv6jgSGCKY6OQ_cm0I",
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };
