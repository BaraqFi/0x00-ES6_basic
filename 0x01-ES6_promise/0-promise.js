
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
	const responseData = { message: "Response from API" };
	resolve(responseData);
    }, 2000);
  });
}

module.exports = getResponseFromAPI();

