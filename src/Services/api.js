import GetStoryInfo from '../Configs/GetStoryInfo';

export function getStoryInfo(category) {
  return fetch(`${GetStoryInfo}?category=${category}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}