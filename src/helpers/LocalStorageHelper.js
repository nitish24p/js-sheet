const saveItemToLocalStorage = (itemName, objectToSave) => {
  localStorage.setItem(itemName, JSON.stringify(objectToSave));
};

const fetchItemFromLocalStorage = (itemName) => {
  return JSON.parse(localStorage.getItem(itemName));
};

export { saveItemToLocalStorage, fetchItemFromLocalStorage };