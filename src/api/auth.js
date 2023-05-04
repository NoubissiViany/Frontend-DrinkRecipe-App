import { httpClient } from './axios';

export function register(user) {
  return httpClient.post('user/addUser', user);
}

export function login(email, password) {
  return httpClient.post('user/login', { email, password });
}

export function getCurrentUser() {
  return httpClient.get('user/current-user').then(({ data }) => data);
}

export function updateUser(userUpdate) {
  return httpClient.put(`user/${userUpdate.id}`, userUpdate);
}

export function getDrinks() {
  return httpClient.get('drink/allDrinks').then(({ data }) => data);
}

export function getCategories() {
  return httpClient.get(`category/allCategories`).then(({ data }) => data);
}

export function getIngredients() {
  return httpClient.get(`ingredient/allIngredients`).then(({ data }) => data);
}

export function getGlasses() {
  return httpClient.get(`glass/allGlasses`).then(({ data }) => data);
}
