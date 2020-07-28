import config from '../config';

export const fetchApiData = async ({ signal }) => {
  const response = await fetch(config.apiUrl, {
    method: 'GET',
    signal
  });

  return await response.json();
}