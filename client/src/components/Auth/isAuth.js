import syncFetch from 'sync-fetch';

export default function isAuth() {
  const result = syncFetch('/api/auth/checkToken', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return result.status === 200;
}