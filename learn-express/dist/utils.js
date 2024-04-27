function makeUser(id, name, age) {
    return {
        id,
        name,
        age,
    };
}
let user1 = makeUser(1, "haroon", 21);
let user2 = makeUser(2, "adam", 20);
let user3 = makeUser(3, "john", 19);
export let users = [user1, user2, user3];
export function findUser(id) {
    let userId = Number(id);
    return users.filter((userElement) => userId === userElement.id);
}
export function nameChanger(name) {
    return name.split("").reverse().join("");
}
