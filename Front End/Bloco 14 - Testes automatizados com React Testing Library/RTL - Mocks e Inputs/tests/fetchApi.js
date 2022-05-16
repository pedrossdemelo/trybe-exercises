import fetch from "node-fetch";
export function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/randomsdf")
    .then((response) => response.json())
    .then((responseJson) => responseJson.message)
}
