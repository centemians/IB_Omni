const APIBASE = 'https://jsonplaceholder.typicode.com';

function apiEndpoint(path) {
  return `${APIBASE}${path}`;
}

export async function apiRequest(method, path) {
  const response = await fetch(apiEndpoint(path), {method});
  const json = await response.json();
  return json;
}
