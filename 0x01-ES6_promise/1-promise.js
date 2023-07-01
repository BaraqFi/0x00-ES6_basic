export default function getFullResponseFromAPI(successs) {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
    if (typeof success === 'boolean') {
	resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
   }, 2000);
  });
}
