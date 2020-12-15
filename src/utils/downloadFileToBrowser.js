import axios from 'axios';

/**
 * @param {String} url
 * @param {Boolean} [withCredentials]
 * @returns {Promise<Object | null>}
 */
export default async function downloadFileToBrowser(url, withCredentials = false) {
  const response = await axios.request({
    method: 'get',
    url,
    withCredentials,
    responseType: 'blob',
  });
  const { data, headers } = response;
  const matches = headers['Content-Disposition']?.match(/filename="(.+)"$/);
  const fileName = matches?.[1] || null;

  if (!data) return null;

  return { fileName, data };
}
