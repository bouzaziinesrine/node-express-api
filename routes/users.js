import express, { Router } from 'express';

import { createUser , getUsers , getUser ,updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();



router.get('/', getUsers);

router.post('/', createUser );

//users/2 => req.params {id:2}

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);


export default router;