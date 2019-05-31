import GetStoryInfo from '../Configs/GetStoryInfo';

export function getStoryInfo(category) {
  // return fetch(`${GetStoryInfo}?category=${category}`, {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  // }).catch(err => {
  //   console.log(err)
  // }) 
  return fetch(`${GetStoryInfo}?category=${category}`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}