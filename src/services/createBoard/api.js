import 'whatwg-fetch'

export const createBoardApiMethod = async (title) => {
        await window.fetch("http://localhost:8080/board", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                boardName: title
            })
        })
        .then(function(response) {
            console.log(response)
            return response.json();
        })
        .then(function(json) {
            return json;
        })
        .catch(function(error) {
            console.error(error)
        });
}