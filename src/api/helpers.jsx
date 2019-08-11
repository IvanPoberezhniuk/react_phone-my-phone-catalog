const saveDataToLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export default saveDataToLocalStorage;
