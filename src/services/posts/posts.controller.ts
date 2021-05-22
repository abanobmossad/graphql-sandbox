import express from 'express';
import { getAllPosts, getPost } from './posts.service';

export const postsRouter = express.Router();

postsRouter.get('/:id', async (req, res) => {
  const user = await getPost(+req.params.id);
  res.send(user);
});

postsRouter.get('/', async (req, res) => {
  const users = await getAllPosts();
  res.send(users);
});
