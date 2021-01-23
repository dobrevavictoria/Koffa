import syncFetch from 'sync-fetch';

export default function isAuth() {
  const result = syncFetch('https://koffa-api.herokuapp.com/auth/checkToken', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return result.status === 200;
}