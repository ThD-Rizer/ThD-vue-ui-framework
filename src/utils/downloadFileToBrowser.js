/**
 * @param {string} url
 * @param {boolean} [withCredentials]
 * @returns {Promise<?Object>}
 */
export default async function downloadFileToBrowser(url, withCredentials = false) {
  const credentials = withCredentials ? 'include' : 'same-origin';
  const response = await fetch(url, {
    method: 'GET',
    credentials,
  });

  if (!response) return null;

  const contentDispositionHeader = response.headers.get('Content-Disposition');
  const data = response.blob();

  const matches = contentDispositionHeader?.match(/filename="(.+)"$/);
  const fileName = matches?.[1] || null;

  if (!data) return null;

  return { fileName, data };
}
