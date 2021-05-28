import FileSaver from 'file-saver';

/**
 * @param {Blob | File | string} data
 * @param {string} fileName
 * @returns {void}
 */
export default function downloadFile(data, fileName = null) {
  FileSaver.saveAs(data, fileName);
}
