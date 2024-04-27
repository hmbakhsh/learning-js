type User = {
  id: number;
  name: string;
  age: number;
};

function makeUser(id: number, name: string, age: number): User {
  return {
    id,
    name,
    age,
  };
}

let user1 = makeUser(1, "haroon", 21);
let user2 = makeUser(2, "adam", 20);
let user3 = makeUser(3, "john", 19);

export let users: User[] = [user1, user2, user3];

export function findUser(id: string) {
  let userId = Number(id);
  return users.filter((userElement) => userId === userElement.id);
}

export function nameChanger(name: string) {
  return name.split("").reverse().join("");
}
