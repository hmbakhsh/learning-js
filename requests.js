// fetch("http://jsonplaceholder.typicode.com/users/1")
//   .then(
//     (response) => {
//       if (response) {
//         return response.json();
//       } else {
//         throw new Error("Failed request!");
//       }
//     },
//     (networkError) => console.log(networkError.message),
//   )
//   .then((data) => {
//     return data
//   });

async function getUserData() {
  let response = await fetch("http://jsonplaceholder.typicode.com/users/1");
  // .then(
  //   (response) => {
  //     if (response) {
  //       return response.json();
  //     } else {
  //       throw new Error("Failed request!");
  //     }
  //   },
  //   (networkError) => console.log(networkError.message),
  // )
  // .then((data) => {
  //   return data;
  // });
  return response;
}

getUserData()
  .then((data) => data.json())
  .then((json) => console.log(json));
