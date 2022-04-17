import "whatwg-fetch";

export const getBoardsApiMethod = async (options = {}) => {
  const boards = await window
    .fetch("http://localhost:8080/board", {
      method: "GET",
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      return json;
    })
    .catch(function (error) {
      console.error(error);
    });

  return boards;
};
