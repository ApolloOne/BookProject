const bcrypt = require('bcrypt');
const start = Date.now();
bcrypt.hash('apollo', 10)
    .then(hash => console.log("with then :" + "|time " + (Date.now() - start) + "|" + hash))
    .catch(err =>console.log("catch"+(Date.now() - start)));

bcrypt.hash('apollo', 10, (hash) => {
    console.log("with promise :" + "|time " + (Date.now() - start) + "|" + hash);
})