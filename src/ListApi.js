const apiURL = process.env.REACT_APP_API_URL;

class ListApi {
  static fetchTitle () {
    return fetch(`${apiURL}/title`)
      .then(response => response.text())
      .catch(err => {
        console.log(err);
      });
  }

  static saveTitle (title) {
    return fetch(`${apiURL}/title`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title })
    })
    .then(response => {
      return response.json();
    })
  }

  static fetchListData () {
    return fetch(`${apiURL}/list`)
      .then(response => response.json())
      .catch(err => {
        console.log(err);
      });
  }
}

export default ListApi;