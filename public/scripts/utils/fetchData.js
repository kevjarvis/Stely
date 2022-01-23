export const getDataFromJSON = async (path) => {
  const response = await fetch(path);
  return response.json();
}