friendsList = ['Adam', 'Jon', 'Will', 'Gil'];

const inviteOrders = () => {
  let invites = []
  for (let i = 0; i < friendsList.length; i++) {
    invites.push(`Send invitation to: ${friendsList[i]}`);
  }
  return invites;
}

const addFriends = (name) => {
  friendsList.push(name);
}

addFriends('Jack');
console.log(inviteOrders());
