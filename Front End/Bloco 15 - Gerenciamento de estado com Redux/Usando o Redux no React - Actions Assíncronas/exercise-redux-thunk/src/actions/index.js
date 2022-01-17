export const REQUEST_API = "REQUEST_API";
export const GET_PICTURE = "GET_PICTURE";

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch("https://aws.random.cat/meow")
      .then((response) => response.json())
      .then(({file}) => dispatch(getPicture(file)));
  };
}
