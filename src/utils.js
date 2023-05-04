const TOKEN_LOCATION = 'token';

export function saveToken(token) {
  localStorage.setItem(TOKEN_LOCATION, token);
}

export function deleteToken() {
  localStorage.clear();
}

export function readToken() {
  return localStorage.getItem(TOKEN_LOCATION);
}
