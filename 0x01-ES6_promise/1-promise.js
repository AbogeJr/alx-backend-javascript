export default function getFullResponseFromAPI(success) {
  const res = new Promise((resolve, reject) => {
    if (success === true) {
      resolve({ status: 200, body: 'success' });
    } else if (success === false) {
      reject(Error('The fake API is not working currently'));
    }
  });
  return res;
}
