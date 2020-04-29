import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(path) {
  return fetch(baseUrl + path).then(onSuccess, onError);
}

function del(path) {
  return fetch(baseUrl + path, {method: 'DELETE'}).then(onSuccess, onError);
}

function onSuccess(res) {
  return res.json();
}

function onError(err) {
  console.log(err);  // eslint-disable-line no-console
}
