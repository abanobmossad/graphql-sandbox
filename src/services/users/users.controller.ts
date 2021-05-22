import express from 'express';
import { getAllUser, getUser } from './users.service';

export const usersRouter = express.Router();

usersRouter.get('/', async (req, res) => {
  const users = await getAllUser();
  res.send(users);
});

usersRouter.get('/:id', async (req, res) => {
  const user = await getUser(req.params.id);
  res.send(user);
});
