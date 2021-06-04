const ENDPOINT = 'http://localhost:8080';

export default function login({ username, password }) {
  return fetch(`${ENDPOINT}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then((res) => {
    if (!res.ok) throw new Error('response is not ok');
    return true;
  });
}
