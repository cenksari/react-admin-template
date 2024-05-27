/**
 * Get data from local storage.
 *
 * @param {string} key - Storage key
 */
const getData = (key: string): any => {
  try {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

/**
 * Set data to local storage.
 *
 * @param {string} key - Storage key
 * @param {object} value - Storage value
 */
const setData = (key: string, value: any): boolean => {
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
 * Remove data from local storage.
 *
 * @param {string} key - Storage key
 */
const removeData = (key: string): boolean => {
  try {
    localStorage.removeItem(key);

    return true;
  } catch {
    return false;
  }
};

const Storage = {
  getData,
  setData,
  removeData,
};

export default Storage;
