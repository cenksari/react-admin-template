import Storage from '../utils/Storage';

interface ILocalStorage {
  getData: (key: string) => any;
  setData: (key: string, value: any) => boolean;
  removeData: (key: string) => boolean;
}

const useLocalStorage = (): ILocalStorage => {
  const { getData, setData, removeData } = Storage;

  return {
    getData: (key: string) => getData(key),
    setData: (key: string, value: any) => setData(key, value),
    removeData: (key: string) => removeData(key),
  };
};

export default useLocalStorage;
