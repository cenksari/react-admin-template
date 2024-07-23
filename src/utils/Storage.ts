/**
 * Retrieves data from localStorage by key.
 *
 * @param {string} key - The key to retrieve data from localStorage.
 * @returns {(object | [] | null)} The parsed data if found, otherwise null.
 */
const getData = (key: string): object | [] | null => {
  try {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

/**
 * Sets data in localStorage by key.
 *
 * @param {string} key - The key to set data in localStorage.
 * @param {object} value - The value to set in localStorage.
 * @returns {boolean} True if the data was set successfully, otherwise false.
 */
const setData = (key: string, value: object): boolean => {
  try {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));

      return true;
    }

    return false;
  } catch {
    return false;
  }
};

/**
 * Removes data from localStorage by key.
 *
 * @param {string} key - The key to remove data from localStorage.
 * @returns {boolean} True if the data was removed successfully, otherwise false.
 */
const removeData = (key: string): boolean => {
  try {
    localStorage.removeItem(key);

    return true;
  } catch {
    return false;
  }
};

export default {
  getData,
  setData,
  removeData,
};
