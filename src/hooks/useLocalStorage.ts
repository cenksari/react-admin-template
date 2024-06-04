import Storage from '../utils/Storage';

interface ILocalStorage {
  getData: (key: string) => object | [] | null;
  setData: (key: string, value: object) => boolean;
  removeData: (key: string) => boolean;
}

const useLocalStorage = (): ILocalStorage => {
  const { getData, setData, removeData } = Storage;

  return {
    getData: (key: string) => getData(key),
    setData: (key: string, value: object) => setData(key, value),
    removeData: (key: string) => removeData(key),
  };
};

export default useLocalStorage;
