const ENDPOINT = 'http://localhost:8080';

export default function addFav({ id, jwt }) {
  return fetch(`${ENDPOINT}/favs/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ jwt }),
  })
    .then((res) => {
      if (!res.ok) throw new Error('response is not ok');
      return res.json();
    })
    .then((res) => {
      const { favs } = res;
      console.log(favs);
      return favs;
    });
}
