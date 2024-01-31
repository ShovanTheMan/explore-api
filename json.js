const user = {id: 1, name: 'amir khan', job: 'actor'};
//javascript object notation(json)
const stringified = JSON.stringify(user);
//console.log(user);
// { id: 1, name: 'amir khan', job: 'actor' }
//console.log(stringified);
// {"id":1,"name":"amir khan","job":"actor"}
const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD',
    },
    products: ['laptop','mobile','mic','bluetooth'],
    revenue: 45000,
    isOpen: true,
    isNew: false

};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);

