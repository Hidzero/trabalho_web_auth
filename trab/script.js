// Não funcionou porque o require funcionária apenas se eu rodasse em node e uma solução para isso seria puxar pela API
const { generateKeypair } = require('webauthn');

function createUser(name, username, password){
    user = {
        'name': name,
        'username': username,
        'password': password,
    };

    const { publicKey, privateKey } = generateKeypair();

    return user;
}

newUser = createUser('Lucas', 'lucas', 123)
console.log(newUser.name)