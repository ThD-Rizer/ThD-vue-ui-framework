import JSZip from 'jszip';

/**
 * @param {Array.<Object>} resources
 * @returns {Promise<Blob>} zip archive
 */
export default async function archiveFilesToZip(resources) {
  const zip = new JSZip();

  resources.forEach((resource, index) => {
    const fileName = resource.fileName || `unknown_${index}`;

    zip.file(fileName, resource.data);
  });

  return zip.generateAsync({ type: 'blob' });
}
