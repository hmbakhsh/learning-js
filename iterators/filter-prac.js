names = ['adam', 'jon', 'haroon', 'william', 'aidan'];
const shortNames = names.filter(name => {
  return name.length > 4;
})

console.log(shortNames);
