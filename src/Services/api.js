import GetStoryInfo from '../Configs/GetStoryInfo';
import GetAllStories from '../Configs/GetAllStories'

export function getStoryInfo(category) {
  return fetch(`${GetStoryInfo}?category=${category}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}

export function getAllStories() {
  return fetch(`${GetAllStories}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}