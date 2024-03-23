const promOne = () => {
  return new Promise((resolve, reject) => {
    resolve("Resolved");
  });
};

const promTwo = () => {
  return new Promise((resolve, reject) => {
    resolve("Resolved");
  });
};

const promThree = () => {
  return new Promise((resolve, reject) => {
    if (-1 > 0) {
      resolve("Resolved!");
    } else {
      reject("Rejected..");
    }
  });
};

promThree()
  .then((data) => {
    return data[1];
  })
  .catch((error) => {
    return new Error(error);
  });

const allProms = Promise.all([promOne(), promTwo(), promThree()]);

allProms
  .then((output) => {
    console.log(output);
  })
  .catch((error) => {
    console.log("Error", error);
  });
