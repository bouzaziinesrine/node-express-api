import { v4 as uuidv4 } from 'uuid';

let users = []

export const createUser = (req, res) => {
    const user = req.body;


    users.push({ ...user, id: uuidv4()});

    res.send(`User with the name ${user.firstname} added to the database`);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id = id );


     res.send(foundUser);

}

export const getUsers = (req ,res) => {
    res.send(users);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with ${id} deleted from the database.`);
}


export const updateUser = (req, res) => {
    const { id } = req.params;

    const {firstname , lastname , age} = req.body;

    const userToBeUpdated = users.find((user) => user.id = id);

    if (firstname){
        users.firstname = firstname;
    }
    if (lastname){
        users.firstname = lastname;
    }
    if (age){
        users.firstname = age;
    }
    res.send(`User with id ${id} has been updated `);


}