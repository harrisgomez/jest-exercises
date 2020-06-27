const axios = require('axios');

const myFunctions = {
    checkValue: x => x,
    isNull: () => null,
    add: (num1, num2) => num1 + num2,
    createUser: () => {
        const user = { firstName: 'Brad' };
        user['lastName'] = 'Traversy';
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')
};

module.exports = myFunctions;