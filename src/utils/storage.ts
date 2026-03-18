export const getData = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '[]');
};

export const setData = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};