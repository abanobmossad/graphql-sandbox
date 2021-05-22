import { RemoteServer } from '../../database';

export function getPost(id: number) {
  return RemoteServer.get(`/posts/${id}`);
}

export function getAllPosts() {
  return RemoteServer.get('/posts');
}

export function getUserPosts(userId: string) {
  return RemoteServer.get(`users/${userId}/posts`);
}
