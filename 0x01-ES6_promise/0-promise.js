function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
	const responseData = { message: "Response from API" };
	resolve(responseData);
    }, 2000);
  });
}

const response = getResponseFromAPI();
console.log(response instanceof Promise);
