import { RemoteServer } from '../../database';

export function getUser(id: string) {
  return RemoteServer.get(`/users/${id}`);
}

export function getAllUser() {
  return RemoteServer.get('/users');
}
