const loadData = (key) => {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (error) {
    return undefined;
  }
};

const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export { loadData, saveData };
