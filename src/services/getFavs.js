const ENDPOINT = 'http://localhost:8080';

export default function getFavs({ jwt }) {
  return fetch(`${ENDPOINT}/favs`, {
    method: 'GET',
    headers: {
      // prettier-ignore
      'Authorization': jwt,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error('response is not ok');
      return res.json();
    })
    .then((res) => {
      const { favs } = res;
      return favs;
    });
}
