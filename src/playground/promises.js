
const promise = new Promise((res, rej) => {
	setTimeout(() => {
		const choice = true;

		if (choice) {
			res({
				data: "resolved"
			});
		} else {
			rej("something went wrong");
		}
	}, 2000);
});

console.log("before")

promise.then((data) => {
		console.log("Data successfully passed :", data);

		return new Promise((res, rej) => {
			setTimeout(() => {
				const choice = true;
		
				if (choice) {
					res({
						data: "resolved second promise"
					});
				} else {
					rej("something went wrong");
				}
			}, 2000);
		});
	}).then((str) => {
		console.log("Data: ", str)
	})
	.catch((error) => {
		console.log("error: ", error)
	})

console.log("after");

