const itemJSON = `{
    "type": "food",
    "edible": true,
    "quantity": 2
}`
const item = JSON.parse(itemJSON);
console.log(item.type); // food
console.log(item.edible); // true