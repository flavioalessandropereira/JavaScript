function getAdmins(map){

    let admins = [];

    for([key, value]of map){
        if (value == 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Flavio', 'Admin');
usuarios.set('Manhu', 'User');
usuarios.set('Tamara', 'Admin');

console.log(getAdmins(usuarios));
