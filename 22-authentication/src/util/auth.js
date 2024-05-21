import { redirect } from "react-router-dom";

export function getTokenExpirationTime() {
  const expirationStr = localStorage.getItem('tokenExpirationDate');
  const expirationDate = new Date(expirationStr);
  const now = new Date();
  return expirationDate.getTime() - now.getTime();
}

export function getAuthToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const expirationTime = getTokenExpirationTime();
  if (expirationTime <= 0) {
    return 'EXPIRED';
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }

  return token;
}