const apiURL = process.env.REACT_APP_API_URL;

class ListApi {
  static fetchTitle() {
    return fetch(`${apiURL}/title`)
      .then((response) => response.text())
      .catch((err) => {
        console.log(err);
      });
  }

  static saveTitle(title) {
    return fetch(`${apiURL}/title`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    }).then((response) => {
      return response.json();
    });
  }

  static fetchListData() {
    return fetch(`${apiURL}/list`)
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
  }

  static saveItem(item) {
    console.log("API " + JSON.stringify(item))
    return fetch(`${apiURL}/item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item }),
    }).then((response) => {
      return response.json();
    });
  }

  static updateItem(indexToUpdate, name) {
    return fetch(`${apiURL}/item`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        index: indexToUpdate,
        name,
      }),
    }).then((response) => {
      return response.json();
    });
  }

  static deleteItem(indexToDelete) {
    return fetch(`${apiURL}/item`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ index: indexToDelete }),
    }).then((response) => {
      return response.json();
    });
  }
}

export default ListApi;
