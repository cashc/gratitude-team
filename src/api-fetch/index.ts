const API_ENDPOINT: string = process.env.REACT_APP_API_ENDPOINT || '';
const JWT_SECRET: string = process.env.REACT_APP_JWT_SECRET || '';

interface API_FETCH_ASYNC {
  url: string;
  token: string;
  method?: string;
  body?: any;
}
export function apiFetch({
  url,
  token = JWT_SECRET,
  method = 'GET',
  body,
}: API_FETCH_ASYNC) {
  const apiUrl = `${API_ENDPOINT}/${url}`;
  return fetch(apiUrl, {
    headers: { Authorization: `Bearer: ${token}` },
    method,
    body,
  });
}
