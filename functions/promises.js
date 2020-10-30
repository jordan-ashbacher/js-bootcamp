const getDataCallback = (callback) => {
	setTimeout(() => {
		callback(undefined, 'The time is up');
	}, 2000);
};

getDataCallback((error, data) => {
	if (error) {
	} else {
		console.log(data);
	}
});

// Promise
const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is the promise data');
		reject('This is my promise error');
	}, 2000);
});

myPromise.then(
	(data) => {
		console.log(data);
	},
	(error) => {
		console.log(error);
	}
);
