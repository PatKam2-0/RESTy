
const getApi = (url, method) => {
  return fetch(url, method)
    .then(res => res.json())
    .then(result => result);
};

export default getApi;
