function getBalanceById(id) {
  return new Promise((resolve, reject) => {
    const balanceArr = [
      {
        id: 1,
        balance: 400,
        lastTransaction: "13/3/24",
      },
      {
        id: 2,
        balance: 500,
        lastTransaction: "13/3/24",
      },
    ];

    setTimeout(() => {
      if (id === 1) {
        resolve(balanceArr[0]);
      } else if (id === 2) {
        resolve(balanceArr[1]);
      } else {
        reject(new Error("User Not Found"));
      }
    }, 1000);
  });
}

getBalanceById(3)
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) => {
    console.log("User Balance", data.balance);
  })
  .catch((error) => {
    console.log(error);
  });
