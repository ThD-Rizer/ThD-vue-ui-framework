import FileSaver from 'file-saver';

/**
 * @param {Blob | File | String} data
 * @param {String} fileName
 * @returns {void}
 */
export default function downloadFile(data, fileName = null) {
  FileSaver.saveAs(data, fileName);
}
